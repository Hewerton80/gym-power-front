import { ExerciseWithComputedFields } from "@/types/Exercise";
import { Training } from "@prisma/client";
import { TrainingHistoryWithComputedFields } from "./trainingHistory";
import { TrainingExerciseWithComputedFields } from "./trainingExercise";

export interface TrainingWithComputedFields extends Training {
  trainingHistories?: TrainingHistoryWithComputedFields[];
  trainingExercises?: TrainingExerciseWithComputedFields[];
  exercises?: ExerciseWithComputedFields[];
  title?: string;
}

export interface IGetTraining extends TrainingWithComputedFields {}
