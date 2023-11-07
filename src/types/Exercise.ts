export enum ExerciseStatus {
  incomplete = "Imcompleto",
  inProgress = "Em Progresso",
  finished = "Finalizado",
}

export interface Exercise {
  id?: string;
  name?: string;
  status?: keyof typeof ExerciseStatus;
}
