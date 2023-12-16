import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";
import { trainingPlanSchema } from "@/lib/apiZodSchemas.ts/trainingPlanSchema";
import { z } from "zod";
import { useMemo } from "react";

export interface ITrainingPlanForm extends z.infer<typeof trainingPlanSchema> {
  studentId?: string;
  id?: string;
}

export function useMudateTrainingPlan() {
  const { apiBase } = useAxios();

  const { mutate: createTrainingPlan, isPending: isCretatingTrainingPlan } =
    useMutation({
      mutationFn: ({ studentId, ...trainingPlan }: ITrainingPlanForm) =>
        apiBase.post(`/training-plan/student/${studentId}`, trainingPlan),
    });

  const { mutate: updateTrainingPlan, isPending: isUpdatingTrainingPlan } =
    useMutation({
      mutationFn: ({ id, ...trainingPlan }: ITrainingPlanForm) =>
        apiBase.patch(`/training-plan/${id}`, trainingPlan),
    });

  const isSubmitingTrainingPlan = useMemo(
    () => isCretatingTrainingPlan || isUpdatingTrainingPlan,
    [isCretatingTrainingPlan, isUpdatingTrainingPlan]
  );

  return { createTrainingPlan, updateTrainingPlan, isSubmitingTrainingPlan };
}
