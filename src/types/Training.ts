import { ExerciseStatus } from "@/types/Exercise";

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
