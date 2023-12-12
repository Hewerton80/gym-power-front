import { TrainingExercise } from "@prisma/client";
import { ExerciseWithComputedFields } from "./Exercise";

export interface TrainingExerciseWithComputedFields
  extends Partial<TrainingExercise> {
  exercise?: ExerciseWithComputedFields;
}
