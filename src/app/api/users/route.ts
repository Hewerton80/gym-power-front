import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsAdmin } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { Prisma } from "@prisma/client";
import { getRandomRGBColor } from "@/shared/colors";
import { createUserSchema } from "@/lib/apiZodSchemas/userSchemas";
import { handleZodValidationError } from "@/lib/zodHelpers";
import {
  UserWithComputedFields,
  getUsersWithComputedFields,
} from "@/types/User";
import { parseUserSearchParams, prismaPagination } from "@/lib/prismaHelpers";

const { USER_HAS_NO_PERMISSION, USER_ALREADY_EXISTS, INTERNAL_SERVER_ERROR } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const { searchParams } = new URL(request.url);
  const { keyword, isActive, gender, role, currentPage, perPage, orderBy } =
    parseUserSearchParams(searchParams);

  console.log("request");
  const paginedUsers = await prismaPagination<
    UserWithComputedFields,
    Prisma.UserWhereInput,
    Prisma.UserOrderByWithRelationInput
  >({
    model: prisma.user,
    paginationArgs: { currentPage, perPage },
    orderBy,
    where: {
      isTeacher: role === "TEACHER" || undefined,
      isAdmin: role === "ADMIN" || undefined,
      gender,
      isActive,
      OR: [{ name: { contains: keyword } }, { email: { contains: keyword } }],
    },
  });
  paginedUsers.docs = getUsersWithComputedFields(paginedUsers.docs);
  return NextResponse.json(paginedUsers, { status: 200 });
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
