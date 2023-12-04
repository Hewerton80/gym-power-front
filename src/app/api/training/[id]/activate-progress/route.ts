import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";

export async function PATCH(
  _: unknown,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const foundTraning = await prisma.training.findUnique({
    where: { id },
    include: { trainingPlan: { include: { trainings: true } } },
  });

  if (!foundTraning) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.TRAINING_NOT_FOUND },
      { status: 404 }
    );
  }

  if (foundTraning.isInProgress) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.TRAINING_ALWREADY_PROGRESS },
      { status: 409 }
    );
  }

  const progressTrainingsToUpdate = foundTraning?.trainingPlan?.trainings?.map(
    (training) => ({
      id: training?.id,
      isInProgress: training?.id === foundTraning?.id,
    })
  );

  for (const training of progressTrainingsToUpdate) {
    await prisma.training.update({
      where: { id: training?.id },
      data: { isInProgress: training?.isInProgress },
    });
  }

  await prisma.trainingHistory.create({
    data: { trainingId: foundTraning?.id },
  });

  return NextResponse.json({ status: 204 });
}
