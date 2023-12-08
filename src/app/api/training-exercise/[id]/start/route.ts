import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";

const {
  TRAINING_NOT_FOUND,
  EXERCISE_ALWREADY_PROGRESS,
  EXERCISE_ALWREADY_FINISHED,
} = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function PATCH(
  _: unknown,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const traingExercise = await prisma.trainingExercise.findUnique({
    where: { id },
  });
  if (!traingExercise) {
    return NextResponse.json({ message: TRAINING_NOT_FOUND }, { status: 404 });
  }
  if (traingExercise?.status === "IN_PROGRESS") {
    return NextResponse.json(
      { message: EXERCISE_ALWREADY_PROGRESS },
      { status: 409 }
    );
  }
  if (traingExercise?.status === "FINISHED") {
    return NextResponse.json(
      { message: EXERCISE_ALWREADY_FINISHED },
      { status: 409 }
    );
  }
  await prisma.trainingExercise.update({
    where: { id: traingExercise?.id },
    data: { status: "IN_PROGRESS" },
  });
  await prisma.trainingExerciseHistory.create({
    data: { trainingExerciseId: traingExercise?.id, startDate: new Date() },
  });

  //   const foundTraningWithComputedFields =
  //     getTrainingWithComputedFields(foundTraning);

  return NextResponse.json({}, { status: 201 });
}
