import { UserRole, UserRolesNamesType } from "@/types/User";

export const usersRolesOptions = Object.keys(UserRole).map((key) => ({
  value: key,
  label: UserRole[key as UserRolesNamesType],
}));
