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
  EXERCISE_NOT_FOUND,
  USER_NOT_FOUND,
  VALIDATION_ERROR,
  STUDENT_ALREADY_HAS_TRAINING_PLAN,
} = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function POST(
  request: NextRequest,
  { params }: { params: { studentId: string } }
) {
  if (!(await verifyIfUserIsTeacher(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }

  const { studentId } = params;
  const traningPlan = (await request.json()) as z.infer<
    typeof trainingPlanSchema
  >;

  try {
    trainingPlanSchema.parse({ name: traningPlan?.name });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }

  const traningPlansCount = await prisma.trainingPlan.count({
    where: { studentId, isActive: true },
  });
  if (traningPlansCount > 0) {
    return NextResponse.json(
      { message: STUDENT_ALREADY_HAS_TRAINING_PLAN },
      { status: 409 }
    );
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
    await prisma.trainingPlan.create({
      data: {
        studentId,
        name: traningPlan?.name,
        teacherId: loggedTeachUser?.id,
        teacherEmail: loggedTeachUser?.email,
        teacherName: loggedTeachUser?.name,
        // trainings: {
        //   create: traningPlan?.trainings?.map((training) => {
        //     const letter = String.fromCharCode(training.order + 64);
        //     return {
        //       name: `Treino - ${letter}`,
        //       order: training?.order,
        //       trainingExercises: {
        //         create: training?.exercises?.map((exercise) => ({
        //           exerciseId: exercise?.exerciseId,
        //           order: exercise?.order,
        //           intervalInSeconds: exercise?.intervalInSeconds,
        //         })),
        //       },
        //     };
        //   }),
        // },
      },
    });
    return NextResponse.json({ message: "ok" }, { status: 201 });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error?.code === "P2003") {
        if (error?.meta?.field_name === "studentId") {
          return NextResponse.json(
            { message: USER_NOT_FOUND },
            { status: 404 }
          );
        }
        // if (error?.meta?.field_name === "exerciseId") {
        //   return NextResponse.json(
        //     { message: EXERCISE_NOT_FOUND },
        //     { status: 404 }
        //   );
        // }
      }
      return NextResponse.json({ message: VALIDATION_ERROR }, { status: 400 });
    }
    return NextResponse.json(
      { message: INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}
