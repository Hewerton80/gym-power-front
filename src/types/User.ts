export enum UserRole {
  ADMIN = "Administrador",
  TEACHER = "Professor",
  STUDENT = "estudante",
}

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
  roles?: UserRole[];
  trainingPlans?: any[];
}
