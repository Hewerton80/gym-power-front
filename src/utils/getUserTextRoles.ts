import { User } from "@prisma/client";

export const getUserTextRoles = (user: User) => {
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
