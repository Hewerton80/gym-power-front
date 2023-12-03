import { ExerciseStatus } from "@/types/Exercise";
import { Training } from "@prisma/client";
import { TrainingHistoryWithComputedFields } from "./trainingHistory";

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
  status?: TrainingNamesType;
  trainingHistory?: TrainingHistoryWithComputedFields[];
}
