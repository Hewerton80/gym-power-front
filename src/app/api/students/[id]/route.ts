import { verifyIfUserIsTeacher } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CONSTANTS } from "@/shared/constants";
import { getUserWithComputedFields } from "@/types/User";
import { getTrainingWithComputedFields } from "@/types/Training";
import { sleep } from "@/shared/sleep";

const { USER_HAS_NO_PERMISSION, USER_NOT_FOUND } =
  CONSTANTS.API_RESPONSE_MENSSAGES;
export async function GET(
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
  const foundUser = await prisma.user.findUnique({
    where: { id },
    include: {
      trainingPlans: {
        where: { isActive: true },
        include: {
          trainings: {
            orderBy: { order: "asc" },
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
          },
        },
      },
    },
  });

  if (!foundUser) {
    return NextResponse.json({ message: USER_NOT_FOUND }, { status: 404 });
  }

  const userWichComputedfields = getUserWithComputedFields(foundUser);

  if (userWichComputedfields?.trainingPlan) {
    userWichComputedfields.trainingPlan.trainings =
      userWichComputedfields.trainingPlan?.trainings?.map((training) => {
        const trainingWithComputedFields =
          getTrainingWithComputedFields(training);
        trainingWithComputedFields.exercicesCount =
          trainingWithComputedFields?.exercises?.length || 0;
        return trainingWithComputedFields;
      });
  }
  return NextResponse.json(userWichComputedfields, {
    status: 200,
  });
  //   return NextResponse.json(foundUser, {
  //     status: 200,
  //   });
}
