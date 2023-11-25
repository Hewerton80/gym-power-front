export enum ExerciseStatus {
  incomplete = "Imcompleto",
  inProgress = "Em Progresso",
  finished = "Finalizado",
}

export type ExerciseNamesType = keyof typeof ExerciseStatus;

export interface Exercise {
  id?: string;
  name?: string;
  status?: ExerciseNamesType;
}
