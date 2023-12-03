import { User, Prisma } from "@prisma/client";
import {
  ITrainingPlans,
  TrainingPlanWithComputedFields,
} from "./TrainingPlans";
import { differenceInYears } from "date-fns";
import { TrainingNamesType } from "./Training";

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
  isActive?: boolean;
  dateOfBirth?: string;
  gender?: string;
  heightInMt?: number;
  weightInKg?: number;
  createdAt?: string;
  userRoles?: { role: UserRolesNamesType }[];
  roles: UserRolesNamesType[];
  trainingPlans?: ITrainingPlans[];
  avatarBgColor?: string;
}
interface UserWithComputedFields
  extends Omit<User, "password" | "trainingPlans"> {
  age?: number;
  trainingPlan?: TrainingPlanWithComputedFields;
}

export interface IGetUsers extends UserWithComputedFields {}

export const getUserWithComputedFields = (
  user: any
): UserWithComputedFields => {
  const computedFuelds: UserWithComputedFields = { ...user };
  if (user?.dateOfBirth) {
    computedFuelds.age = differenceInYears(
      new Date(),
      new Date(user.dateOfBirth)
    );
  }
  if (user?.trainingPlans?.length > 0) {
    computedFuelds.trainingPlan = user
      .trainingPlans[0] as TrainingPlanWithComputedFields;
    computedFuelds.trainingPlan.trainings =
      computedFuelds.trainingPlan?.trainings?.map((training) => {
        let status: TrainingNamesType = "incomplete";
        const lastTrainingHistory = training?.trainingHistory?.at(-1);
        if (lastTrainingHistory) {
          status = lastTrainingHistory?.endDate ? "finished" : "inProgress";
        }
        return {
          ...training,
          status,
        };
      }) || [];
  }
  delete (computedFuelds as any)?.password;
  delete (computedFuelds as any)?.trainingPlans;
  return computedFuelds;
};
