import { TrainingWithComputedFields } from "@/types/Training";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { CONSTANTS } from "@/shared/constants";

const { REQUIRED_FIELDS, MUST_BE_NUMBER, MUST_BE_POSITIVE, MUST_BE_ARRAY } =
  CONSTANTS.VALIDATION_ERROR_MESSAGES;

export const trainingSchema = z.object({
  exerciseOption: z
    .object({
      label: z.string().min(1, REQUIRED_FIELDS).trim(),
      value: z.string().min(1, REQUIRED_FIELDS).trim(),
    })
    .nullable()
    .refine((exerciseOption) => Boolean(exerciseOption?.value?.trim()), {
      message: REQUIRED_FIELDS,
    }),
  exerciseId: z.string().min(1, REQUIRED_FIELDS).optional(),
  order: z
    .string()
    .min(1, MUST_BE_POSITIVE)
    .refine(
      (order) => {
        const orderNumber = Number(order);
        return !isNaN(orderNumber) && orderNumber > 0;
      },
      { message: MUST_BE_POSITIVE }
    ),
  intervalInSeconds: z
    .string()
    .min(1, MUST_BE_POSITIVE)
    .refine(
      (intervalInSeconds) => {
        const intervalInSecondsNumber = Number(intervalInSeconds);
        return !isNaN(intervalInSecondsNumber) && intervalInSecondsNumber > 0;
      },
      { message: MUST_BE_POSITIVE }
    ),
});

export interface ITrainingForm {
  trainings: z.infer<typeof trainingSchema>[];
}

export function useGetMyTrainings() {
  const { apiBase } = useAxios();

  const {
    data: trainings,
    isFetching: isloadingTrainings,
    error: trainingsError,
    refetch: refetchTrainings,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      apiBase
        .get<TrainingWithComputedFields[]>("/me/trainings")
        .then((res) => res.data || []),
  });

  return { trainings, isloadingTrainings, trainingsError, refetchTrainings };
}

export function useGetTraining(id: string) {
  const { apiBase } = useAxios();

  const {
    data: training,
    isFetching: isLoadingTraining,
    error: trainingError,
    refetch: refetchTraining,
  } = useQuery({
    queryKey: [],

    queryFn: () =>
      apiBase
        .get<TrainingWithComputedFields>(`/trainings/${id}`)
        .then((res) => res.data),
  });

  return { training, isLoadingTraining, trainingError, refetchTraining };
}

export function useMutateTraning() {
  const { apiBase } = useAxios();

  const { mutate: startTraining, isPending: isStartingTraning } = useMutation({
    mutationFn: (id: string) => apiBase.patch(`/trainings/${id}/start`),
  });

  const { mutate: finishTraining, isPending: isFinishingTraning } = useMutation(
    {
      mutationFn: (id: string) => apiBase.patch(`/trainings/${id}/finish`),
    }
  );

  return {
    startTraining,
    finishTraining,
    isStartingTraning,
    isFinishingTraning,
  };
}
