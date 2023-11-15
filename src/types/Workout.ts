import { ExerciseStatus } from "@/types/Exercise";

export const WorkoutStatus = {
  ...ExerciseStatus,
  incomplete: "Imcompleto",
};

export interface IWorkout {
  id?: string;
  name?: string;
  status?: keyof typeof WorkoutStatus;
}
