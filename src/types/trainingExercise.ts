import { TrainingExercise } from "@prisma/client";
import { ExerciseWithComputedFields } from "./Exercise";

export interface TrainingExerciseWithComputedFields extends TrainingExercise {
  exercise?: ExerciseWithComputedFields;
}
