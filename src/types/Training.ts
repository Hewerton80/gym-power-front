import { ExerciseWithComputedFields } from "@/types/Exercise";
import { Training } from "@prisma/client";
import { TrainingHistoryWithComputedFields } from "./trainingHistory";
import { TrainingExerciseWithComputedFields } from "./trainingExercise";
import { removeElementsRepeated } from "@/shared/array";

export interface TrainingWithComputedFields extends Training {
  trainingHistories?: TrainingHistoryWithComputedFields[];
  trainingExercises?: TrainingExerciseWithComputedFields[];
  exercises?: ExerciseWithComputedFields[];
  title?: string;
}

export interface IGetTraining extends TrainingWithComputedFields {}

export const getTrainingWithComputedFields = (
  training: any
): TrainingWithComputedFields => {
  const letter = String.fromCharCode(training.order + 64);
  const musclesNames = (
    training?.trainingExercises as TrainingExerciseWithComputedFields[]
  )?.map((trainingExercise) => trainingExercise?.exercise?.muscle?.name);
  training?.exercises;
  const title = `${letter} - ${removeElementsRepeated(musclesNames || [])?.join(
    ", "
  )}`;
  delete training?.trainingExercises;
  return {
    ...training,
    // exercises: exercises as ExerciseWithComputedFields[],
    title,
  };
};

export const getTrainingsWithComputedFields = (trainings: any[]) => {
  return trainings.map((training) => getTrainingWithComputedFields(training));
};
