import { UserWithComputedFields } from "@/types/User";

export const getUserTextRoles = (user: UserWithComputedFields) => {
  if (!user?.isAdmin && !user?.isTeacher) {
    return "Estudante";
  }
  const roles = [];
  if (user?.isAdmin) {
    roles.push("Administrador");
  }
  if (user?.isTeacher) {
    roles.push("Professor");
  }
  return roles.join(", ");
};
