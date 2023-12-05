import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJWT } from "@/lib/auth";
import { getUserWithComputedFields } from "@/types/User";
import { CONSTANTS } from "@/shared/constants";

export async function GET(request: NextRequest) {
  const { payload, error } = await verifyJWT(request);
  if (error) {
    return NextResponse.json({ message: error }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { id: payload?.sub },
    include: {
      trainingPlans: {
        include: {
          trainings: {
            orderBy: { order: "asc" },
            include: {
              trainingExercises: {
                orderBy: { order: "asc" },
                include: { exercise: { include: { muscle: true } } },
              },
            },
          },
        },
      },
    },
  });
  // const user = await prisma.user.findUnique({
  //   where: { id: payload?.sub },
  //   include: {
  //     trainingPlans: {
  //       include: {
  //         trainings: {
  //           orderBy: { order: "asc" },
  //           include: {
  //             trainingExercises: {
  //               orderBy: { order: "asc" },
  //               include: { exercise: { include: { muscle: true } } },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  if (!user) {
    return NextResponse.json(
      { message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_NOT_FOUND },
      { status: 404 }
    );
  }
  const userWichComputedfields = getUserWithComputedFields(user);
  return NextResponse.json(userWichComputedfields, { status: 200 });
}
