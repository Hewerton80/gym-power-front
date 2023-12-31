import { Exercise, ExerciseStatus } from "@prisma/client";
import { MuscleWithComputedFields } from "./Muscle";

type ExerciseStatusMap = {
  [key in ExerciseStatus]: string;
};

export const ExercisePtBrStatus: ExerciseStatusMap = {
  READY_TO_START: "Pronto para começar",
  IN_PROGRESS: "Em Progresso",
  FINISHED: "Finalizado",
};

export type ExerciseNamesType = keyof typeof ExercisePtBrStatus;

export interface ExerciseWithComputedFields extends Partial<Exercise> {
  muscle?: MuscleWithComputedFields;
  status?: ExerciseStatus;
  trainingExerciseId?: string;
  intervalInSeconds?: number;
  order?: number;
}
