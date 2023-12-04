import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";

export async function PATCH(
  _: unknown,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const foundTraning = await prisma.training.findUnique({
    where: { id: id },
    include: { trainingPlan: { include: { trainings: true } } },
  });

  if (!foundTraning) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.TRAINING_NOT_FOUND },
      { status: 404 }
    );
  }

  if (!foundTraning.isInProgress) {
    return NextResponse.json(
      {
        message:
          CONSTANTS.API_RESPONSE_MENSSAGES.TRAINING_ALWREADY_NOT_PROGRESS,
      },
      { status: 409 }
    );
  }

  await prisma.training.update({
    where: { id: foundTraning?.id },
    data: { isInProgress: false },
  });

  const trainingHistory = await prisma.trainingHistory.findFirst({
    where: { trainingId: foundTraning?.id, endDate: null },
    orderBy: { startDate: "desc" },
  });
  if (trainingHistory) {
    await prisma.trainingHistory.update({
      where: { id: trainingHistory?.id },
      data: { endDate: new Date() },
    });
  }

  return NextResponse.json({ status: 204 });
}
