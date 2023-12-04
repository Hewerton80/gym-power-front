import { Exercise } from "@prisma/client";
import { MuscleWithComputedFields } from "./Muscle";

export enum ExerciseStatus {
  incomplete = "Imcompleto",
  inProgress = "Em Progresso",
  finished = "Finalizado",
}

export type ExerciseNamesType = keyof typeof ExerciseStatus;

export interface IExercise {
  id?: string;
  name?: string;
  status?: ExerciseNamesType;
}

export interface ExerciseWithComputedFields extends Exercise {
  muscle?: MuscleWithComputedFields;
}
