import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";

const {
  TRAINING_NOT_FOUND,
  EXERCISE_ALWREADY_FINISHED,
  EXERCISE_WAS_NOT_STARTED,
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
  if (traingExercise?.status === "READY_TO_START") {
    return NextResponse.json(
      { message: EXERCISE_WAS_NOT_STARTED },
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
    data: { status: "FINISHED" },
  });

  const trainingExerciseHistory =
    await prisma.trainingExerciseHistory.findFirst({
      where: {
        trainingExerciseId: traingExercise?.id,
        exerciseId: traingExercise?.exerciseId,
        endDate: null,
      },
    });
  if (trainingExerciseHistory) {
    await prisma.trainingExerciseHistory.update({
      where: { id: trainingExerciseHistory?.id },
      data: { endDate: new Date() },
    });
  }

  return NextResponse.json({}, { status: 201 });
}
