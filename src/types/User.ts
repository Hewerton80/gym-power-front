import { User } from "@prisma/client";
import {
  ITrainingPlans,
  TrainingPlanWithComputedFields,
} from "./TrainingPlans";
import { differenceInYears } from "date-fns";

export enum UserRole {
  ADMIN = "Administrador",
  TEACHER = "Professor",
  STUDENT = "Estudante",
}

type GenderType = {
  [key in keyof typeof Gende]: string;
};

export const GenderPtBr: GenderType = {};

export type UserRolesNamesType = keyof typeof UserRole;

export interface UserWithComputedFields
  extends Partial<
    Omit<User, "password" | "trainingPlans" | "isAdmin" | "isTeacher">
  > {
  title?: string;
  age?: number;
  trainingPlan?: TrainingPlanWithComputedFields;
  roles: UserRolesNamesType[];
}

export interface IGetUsers extends UserWithComputedFields {}

export const getUserWithComputedFields = (
  user: any
): UserWithComputedFields => {
  const userWitchComputedFields: UserWithComputedFields = { ...user };
  const roles: UserRolesNamesType[] = ["STUDENT"];
  if (user?.isAdmin) {
    roles.push("ADMIN");
  }
  if (user?.isTeacher) {
    roles.push("TEACHER");
  }
  userWitchComputedFields.roles = roles;
  if (user?.dateOfBirth) {
    userWitchComputedFields.age = differenceInYears(
      new Date(),
      new Date(user.dateOfBirth)
    );
  }
  if (user?.trainingPlans?.length > 0) {
    userWitchComputedFields.trainingPlan = user
      .trainingPlans[0] as TrainingPlanWithComputedFields;
    // const trainings = userWitchComputedFields.trainingPlan?.trainings;
    // userWitchComputedFields.trainingPlan.trainings = getTrainingsWithComputedFields(
    //   trainings || []
    // );
  }
  delete (userWitchComputedFields as any)?.isAdmin;
  delete (userWitchComputedFields as any)?.isTeacher;
  delete (userWitchComputedFields as any)?.password;
  delete (userWitchComputedFields as any)?.trainingPlans;
  return userWitchComputedFields;
};
