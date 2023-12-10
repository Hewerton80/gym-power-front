import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsAdmin } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { Prisma } from "@prisma/client";
import { updateUserSchema } from "@/lib/apiZodSchemas.ts/userSchemas";
import { handleZodValidationError } from "@/lib/zodHelpers";

const { USER_HAS_NO_PERMISSION, INTERNAL_SERVER_ERROR, USER_NOT_FOUND } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await verifyIfUserIsAdmin(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }
  const { id } = params;

  //   console.log({ data: await request.json() });

  const userDate = (await request.json()) as Prisma.UserUpdateInput;
  console.log({ userDate });

  let userDateToCrate = {};
  try {
    userDateToCrate = updateUserSchema.parse({
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
    return NextResponse.json({ email: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
}
