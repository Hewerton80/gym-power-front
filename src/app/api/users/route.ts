import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsAdmin } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { z } from "zod";
import { ToZodObjectSchema, handleZodValidationError } from "@/lib/zodHelpers";
import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { getRandomRGBColor } from "@/shared/colors";

const { USER_HAS_NO_PERMISSION, USER_ALREADY_EXISTS } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

const { REQUIRED_FIELDS, INVALID_EMAIL, MUST_BE_BOOLEAN } =
  CONSTANTS.VALIDATION_ERROR_MESSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}
type CreateUserType = Pick<
  User,
  "name" | "email" | "password" | "isAdmin" | "isTeacher"
>;

const createUserSchema = z
  .object<ToZodObjectSchema<CreateUserType>>({
    name: z.string({ required_error: REQUIRED_FIELDS }).min(1, REQUIRED_FIELDS),
    email: z
      .string({ required_error: REQUIRED_FIELDS })
      .min(1, REQUIRED_FIELDS)
      .email({ message: INVALID_EMAIL }),
    password: z
      .string({ required_error: REQUIRED_FIELDS })
      .min(6, "Senha deve ter no mínimo 6 caracteres"),
    isAdmin: z.boolean().optional(),
    isTeacher: z.boolean().optional(),
  })
  .required({ name: true, email: true, password: true });

export async function POST(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const { email, name, password, isAdmin, isTeacher } =
    (await request.json()) as CreateUserType;

  try {
    createUserSchema.parse({ email, name, password, isAdmin, isTeacher });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }

  const countUser = await prisma.user.count({
    where: { email: email.trim() },
  });

  if (countUser > 0) {
    return NextResponse.json({ email: USER_ALREADY_EXISTS }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      email: email.trim(),
      name: name.trim(),
      password: await hash(String(password).trim(), 10),
      isAdmin: Boolean(isAdmin),
      isTeacher: Boolean(isTeacher),
      avatarBgColor: getRandomRGBColor(),
      gender: "M",
      dateOfBirth: new Date(),
    },
  });

  return NextResponse.json({ message: "ok" }, { status: 201 });
}
