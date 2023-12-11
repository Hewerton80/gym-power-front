import { User } from "@/prisma/generated/client";

export type LoginCredentials = Pick<User, "email" | "password">;
