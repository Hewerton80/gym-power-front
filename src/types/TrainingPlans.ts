import { TrainingPlan } from "@prisma/client";
import { TrainingWithComputedFields } from "./Training";

export interface TrainingPlanWithComputedFields extends TrainingPlan {
  trainings?: TrainingWithComputedFields[];
}
