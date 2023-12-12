import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsAdmin } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { Prisma } from "@prisma/client";
import { getRandomRGBColor } from "@/shared/colors";
import { createUserSchema } from "@/lib/apiZodSchemas.ts/userSchemas";
import { handleZodValidationError } from "@/lib/zodHelpers";
import { getUsersWithComputedFields } from "@/types/User";

const { USER_HAS_NO_PERMISSION, USER_ALREADY_EXISTS, INTERNAL_SERVER_ERROR } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const users = await prisma.user.findMany();
  const usersWithComputedFields = getUsersWithComputedFields(users);
  return NextResponse.json(usersWithComputedFields, { status: 200 });
}

export async function POST(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const { email, name, password, gender, dateOfBirth, isAdmin, isTeacher } =
    (await request.json()) as Prisma.UserCreateInput;

  let userDateToCrate = {};
  try {
    userDateToCrate = createUserSchema.parse({
      email,
      name,
      gender,
      dateOfBirth,
      password,
      isAdmin,
      isTeacher,
    });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }

  try {
    await prisma.user.create({
      data: {
        ...(userDateToCrate as Prisma.UserCreateInput),
        avatarBgColor: getRandomRGBColor(),
      },
    });
    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error?.code === "P2002") {
        return NextResponse.json(
          { message: USER_ALREADY_EXISTS },
          { status: 409 }
        );
      }
    }
    return NextResponse.json({ email: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
}
