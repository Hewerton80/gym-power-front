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
    .optional()
    .refine((exerciseOption) => Boolean(exerciseOption?.value?.trim()), {
      message: REQUIRED_FIELDS,
    }),
  exerciseId: z.string().min(1, REQUIRED_FIELDS).optional(),
  order: z.number().min(1, MUST_BE_POSITIVE).optional(),
  intervalInSeconds: z.number().min(1, MUST_BE_POSITIVE),
});

export type TrainingFormSchemaType = z.infer<typeof trainingSchema>;

export interface ITrainingForm {
  exercises: TrainingFormSchemaType[];
  trainingPlanId?: string;
  trainingId?: string;
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

export function useGetTraining(id?: string) {
  const { apiBase } = useAxios();

  const {
    data: training,
    isFetching: isLoadingTraining,
    error: trainingError,
    refetch: refetchTraining,
  } = useQuery({
    queryKey: ["training"],

    queryFn: () => {
      return apiBase
        .get<TrainingWithComputedFields>(`/trainings/${id}`)
        .then((res) => res.data);
    },
    enabled: Boolean(id),
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

  const { mutate: createTraining, isPending: isCreatingTraining } = useMutation(
    {
      mutationFn: ({ trainingPlanId, ...trainingForm }: ITrainingForm) =>
        apiBase.post(
          `/trainings/training-plan/${trainingPlanId}`,
          trainingForm
        ),
    }
  );

  const { mutate: updateTraining, isPending: isUpdatingTraining } = useMutation(
    {
      mutationFn: ({ trainingId, ...trainingForm }: ITrainingForm) =>
        apiBase.patch(`/trainings/${trainingId}`, trainingForm),
    }
  );

  const isSubmitingTraining = useMemo(
    () => isCreatingTraining || isUpdatingTraining,
    [isCreatingTraining, isUpdatingTraining]
  );

  return {
    isStartingTraning,
    isFinishingTraning,
    isSubmitingTraining,
    updateTraining,
    startTraining,
    finishTraining,
    createTraining,
  };
}
