export enum UserRole {
  ADMIN = "Administrador",
  TEACHER = "Professor",
  STUDENT = "Estudante",
}

export type UserRolesNamesType = keyof typeof UserRole;

export interface IUser {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  userId?: string;
  dateOfBirth?: string;
  gender?: string;
  heightInMt?: number;
  weightInKg?: number;
  createdAt?: string;
  userRoles?: { role: UserRole }[];
  roles: UserRolesNamesType[];
  trainingPlans?: any[];
}
