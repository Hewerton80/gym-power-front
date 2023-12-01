import { User } from "@prisma/client";

export type JwtDto = Pick<User, "id">;
