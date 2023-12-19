import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyIfUserIsTeacher } from "@/lib/auth";
import { CONSTANTS } from "@/shared/constants";
import {
  UserWithComputedFields,
  getUsersWithComputedFields,
} from "@/types/User";
import { prismaPagination } from "@/shared/prismaPagination";
import { Prisma } from "@prisma/client";

const { USER_HAS_NO_PERMISSION } = CONSTANTS.API_RESPONSE_MENSSAGES;

export async function GET(request: NextRequest) {
  if (!(await verifyIfUserIsTeacher(request))) {
    return NextResponse.json(
      { message: USER_HAS_NO_PERMISSION },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const currentPage = searchParams.get("currentPage") || 1;
  const perPage = searchParams.get("perPage") || 25;

  const paginedUsers = await prismaPagination<
    UserWithComputedFields,
    Prisma.UserWhereInput,
    Prisma.UserOrderByWithRelationInput
  >({
    model: prisma.user,
    paginationArgs: { currentPage, perPage },
    orderBy: { name: "asc" },
    where: {
      OR: [{ name: { contains: keyword } }, { email: { contains: keyword } }],
    },
  });
  paginedUsers.docs = getUsersWithComputedFields(paginedUsers.docs);
  return NextResponse.json(paginedUsers, { status: 200 });
}
