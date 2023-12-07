import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";
import { getTrainingWithComputedFields } from "@/types/Training";

const { TRAINING_NOT_FOUND } = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(_: unknown, { params }: { params: { id: string } }) {
  const { id } = params;
  const foundTraning = await prisma.training.findUnique({
    where: { id: id },
    include: {
      trainingExercises: {
        orderBy: { order: "asc" },
        include: {
          exercise: {
            include: { muscle: true },
          },
        },
      },
    },
  });

  if (!foundTraning) {
    return NextResponse.json({ message: TRAINING_NOT_FOUND }, { status: 404 });
  }

  const foundTraningWithComputedFields =
    getTrainingWithComputedFields(foundTraning);

  return NextResponse.json(foundTraningWithComputedFields, { status: 200 });
}
