import { verifyIfUserIsTeacher } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { createTrainingPlan } from "@/lib/apiZodSchemas.ts/trainingPlanSchema";
import { handleZodValidationError } from "@/lib/zodHelpers";

const { USER_HAS_NO_PERMISSION, INTERNAL_SERVER_ERROR, USER_NOT_FOUND } =
  CONSTANTS.API_RESPONSE_MENSSAGES;

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
  const traningPlan = (await request.json()) as Prisma.TrainingPlanCreateInput;
  console.log({ traningPlan });

  let traningPlanToCrate = {};
  try {
    traningPlanToCrate = createTrainingPlan.parse({
      name: traningPlan?.name,
      trainings: traningPlan?.trainings,
    });
  } catch (error: any) {
    return NextResponse.json(handleZodValidationError(error), { status: 400 });
  }
  //   const foundUser = await prisma.user.findUnique({ where: { id } });

  //   if (!foundUser) {
  //     return NextResponse.json({ message: USER_NOT_FOUND }, { status: 404 });
  //   }

  return NextResponse.json({}, { status: 200 });
}
