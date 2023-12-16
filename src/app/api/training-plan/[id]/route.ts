import { verifyIfUserIsTeacher, verifyJWT } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { trainingPlanSchema } from "@/lib/apiZodSchemas.ts/trainingPlanSchema";
import { handleZodValidationError } from "@/lib/zodHelpers";
import prisma from "@/lib/prisma";
import { z } from "zod";

const {
  USER_HAS_NO_PERMISSION,
  INTERNAL_SERVER_ERROR,
  VALIDATION_ERROR,
  PLAN_NOT_FOUND,
} = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await verifyIfUserIsTeacher(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }

  const { id } = params;
  const traningPlan = (await request.json()) as z.infer<
    typeof trainingPlanSchema
  >;

  try {
    trainingPlanSchema.parse({ name: traningPlan?.name });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }

  const { payload, error } = await verifyJWT(request);
  if (error) {
    return NextResponse.json({ message: error }, { status: 401 });
  }
  const loggedTeachUser = await prisma.user.findUnique({
    where: { id: payload?.sub },
  });
  if (!loggedTeachUser) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_NOT_FOUND },
      { status: 404 }
    );
  }

  try {
    await prisma.trainingPlan.update({
      where: { id },
      data: {
        name: traningPlan?.name,
        teacherId: loggedTeachUser?.id,
        teacherEmail: loggedTeachUser?.email,
        teacherName: loggedTeachUser?.name,
      },
    });
    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error?.code === "P2025") {
        return NextResponse.json({ message: PLAN_NOT_FOUND }, { status: 404 });
      }
      return NextResponse.json({ message: VALIDATION_ERROR }, { status: 400 });
    }
    return NextResponse.json(
      { message: INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
