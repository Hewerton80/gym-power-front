import { TrainingExercise } from "@/prisma/generated/client";
import { ExerciseWithComputedFields } from "./Exercise";

export interface TrainingExerciseWithComputedFields extends TrainingExercise {
  exercise?: ExerciseWithComputedFields;
}
