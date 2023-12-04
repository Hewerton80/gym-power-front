import { ExerciseStatus, ExerciseWithComputedFields } from "@/types/Exercise";
import { Training } from "@prisma/client";
import { TrainingHistoryWithComputedFields } from "./trainingHistory";
import { TrainingExerciseWithComputedFields } from "./trainingExercise";

export const TrainingStatus = {
  ...ExerciseStatus,
  incomplete: "Imcompleto",
};

export type TrainingNamesType = keyof typeof TrainingStatus;

export interface ITraining {
  id?: string;
  name?: string;
  status?: TrainingNamesType;
}

export interface TrainingWithComputedFields extends Training {
  trainingHistories?: TrainingHistoryWithComputedFields[];
  trainingExercises?: TrainingExerciseWithComputedFields[];
  exercises?: ExerciseWithComputedFields[];
  title?: string;
}

export interface IGetTraining extends TrainingWithComputedFields {}
