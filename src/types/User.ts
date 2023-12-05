import { User } from "@prisma/client";
import {
  ITrainingPlans,
  TrainingPlanWithComputedFields,
} from "./TrainingPlans";
import { differenceInYears } from "date-fns";
import { removeElementsRepeated } from "@/shared/array";
import { ExerciseWithComputedFields } from "./Exercise";

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
export interface UserWithComputedFields
  extends Omit<User, "password" | "trainingPlans"> {
  title?: string;
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
        const exercises = training?.trainingExercises?.map(
          (trainingExercise) => ({
            ...trainingExercise?.exercise,
            status: trainingExercise?.status,
          })
        );
        const letter = String.fromCharCode(training.order + 64);
        const musclesNames = exercises?.map(
          (exercise) => exercise?.muscle?.name
        );
        training?.exercises;
        delete training?.trainingExercises;
        return {
          ...training,
          exercises: exercises as ExerciseWithComputedFields[],
          title: `${letter} - ${removeElementsRepeated(
            musclesNames || []
          )?.join(", ")}`,
        };
      }) || [];
  }
  delete (computedFuelds as any)?.password;
  delete (computedFuelds as any)?.trainingPlans;
  return computedFuelds;
};

// export const getUserWithComputedFields = (
//   user: any
// ): UserWithComputedFields => {
//   const computedFuelds: UserWithComputedFields = { ...user };
//   if (user?.dateOfBirth) {
//     computedFuelds.age = differenceInYears(
//       new Date(),
//       new Date(user.dateOfBirth)
//     );
//   }
//   if (user?.trainingPlans?.length > 0) {
//     computedFuelds.trainingPlan = user
//       .trainingPlans[0] as TrainingPlanWithComputedFields;
//     computedFuelds.trainingPlan.trainings =
//       computedFuelds.trainingPlan?.trainings?.map((training) => {
//         const exercises = training?.trainingExercises?.map(
//           (trainingExercise) => ({
//             ...trainingExercise?.exercise,
//             status: trainingExercise?.status,
//           })
//         );
//         const letter = String.fromCharCode(training.order + 64);
//         const musclesNames = exercises?.map(
//           (exercise) => exercise?.muscle?.name
//         );
//         training?.exercises;
//         delete training?.trainingExercises;
//         return {
//           ...training,
//           exercises: exercises as ExerciseWithComputedFields[],
//           title: `${letter} - ${removeElementsRepeated(
//             musclesNames || []
//           )?.join(", ")}`,
//         };
//       }) || [];
//   }
//   delete (computedFuelds as any)?.password;
//   delete (computedFuelds as any)?.trainingPlans;
//   return computedFuelds;
// };
