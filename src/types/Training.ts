import { ExerciseStatus } from "@/types/Exercise";

export const TrainingStatus = {
  ...ExerciseStatus,
  incomplete: "Imcompleto",
};

export interface ITraining {
  id?: string;
  name?: string;
  status?: keyof typeof TrainingStatus;
}
