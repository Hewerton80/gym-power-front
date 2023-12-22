import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJWT } from "@/lib/auth";
import { getUserWithComputedFields } from "@/types/User";
import { CONSTANTS } from "@/shared/constants";
import { createUserSchema } from "@/lib/apiZodSchemas/userSchemas";
import { Prisma } from "@prisma/client";
import { handleZodValidationError } from "@/lib/zodHelpers";

const { INTERNAL_SERVER_ERROR, USER_NOT_FOUND } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  const { payload, error } = await verifyJWT(request);
  if (error) {
    return NextResponse.json({ message: error }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { id: payload?.sub },
    include: {
      trainingPlans: { where: { isActive: true } },
    },
  });
  if (!user) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_NOT_FOUND },
      { status: 404 }
    );
  }
  const userWichComputedfields = getUserWithComputedFields(user);
  return NextResponse.json(userWichComputedfields, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const { payload, error } = await verifyJWT(request);
  if (error) {
    return NextResponse.json({ message: error }, { status: 401 });
  }
  const id = payload?.sub;

  //   console.log({ data: await request.json() });

  const userDate = (await request.json()) as Prisma.UserUpdateInput;

  let userDateToCrate = {};
  try {
    userDateToCrate = createUserSchema.parse({
      name: userDate?.name,
      gender: userDate?.gender,
      dateOfBirth: userDate?.dateOfBirth,
      password: userDate?.password,
      isAdmin: userDate?.isAdmin,
      isTeacher: userDate?.isTeacher,
    });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id },
      data: userDateToCrate as Prisma.UserUpdateInput,
    });
    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error?.code === "P2025") {
        return NextResponse.json({ message: USER_NOT_FOUND }, { status: 404 });
      }
    }
    return NextResponse.json(
      { message: INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
