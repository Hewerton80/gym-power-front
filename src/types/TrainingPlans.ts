import { TrainingPlan } from "@prisma/client";
import { TrainingWithComputedFields } from "./Training";

export interface ITrainingPlans {
  id?: string;
  name?: string;
}

export interface TrainingPlanWithComputedFields extends TrainingPlan {
  // trainings?: TrainingWithComputedFields[];
}
