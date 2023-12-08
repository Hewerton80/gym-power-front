import { TrainingWithComputedFields } from "@/types/Training";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";

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
