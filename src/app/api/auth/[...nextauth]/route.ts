import { LoginCredentials } from "@/dtos/loginCredentials";
import { sleept } from "@/utils/sleep";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const loginCredentials = (await request.json()) as LoginCredentials;
  console.log({ body: loginCredentials });
  await sleept(2000);
  return NextResponse.json({ name: "fulano" }, { status: 201 });
}
