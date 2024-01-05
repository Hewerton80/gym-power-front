import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsTeacher } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import {
  UserWithComputedFields,
  getUsersWithComputedFields,
} from "@/types/User";
import {
  parseOrderBy,
  parseUserSearchParams,
  prismaPagination,
} from "@/lib/prismaHelpers";
import { Gender, Prisma } from "@prisma/client";
import { stringToBoolean } from "@/shared/stringToBoolean";

const { USER_HAS_NO_PERMISSION } = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsTeacher(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const { keyword, isActive, gender, currentPage, perPage, orderBy } =
    parseUserSearchParams(searchParams);

  const paginedUsers = await prismaPagination<
    UserWithComputedFields,
    Prisma.UserWhereInput,
    Prisma.UserOrderByWithRelationInput
  >({
    model: prisma.user,
    paginationArgs: { currentPage, perPage },
    orderBy,
    where: {
      gender,
      isActive,
      OR: [{ name: { contains: keyword } }, { email: { contains: keyword } }],
    },
  });
  paginedUsers.docs = getUsersWithComputedFields(paginedUsers.docs);
  return NextResponse.json(paginedUsers, { status: 200 });
}
