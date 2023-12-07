import { TrainingWithComputedFields } from "@/types/Training";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetMyTrainings(trainings?: TrainingWithComputedFields[]) {
  const recommendedTraingToDay = useMemo(() => {
    const index =
      trainings?.findIndex((training) => training.isRecommendedToDay) || [];
    return trainings?.[Number(index)];
  }, [trainings]);

  return { recommendedTraingToDay };
}

export function useGetTraining(id: string) {
  const { apiBase } = useAxios();

  const {
    data: training,
    isFetching: isTrainingLoading,
    error: trainingError,
    refetch: refetchTraining,
  } = useQuery({
    queryKey: [],

    queryFn: () =>
      apiBase
        .get<TrainingWithComputedFields>(`/training/${id}`)
        .then((res) => res.data),
  });

  return { training, isTrainingLoading, trainingError, refetchTraining };
}

export function useMutateTraning() {
  const { apiBase } = useAxios();

  const { mutate: startTraining, isPending: isStartingTraning } = useMutation({
    mutationFn: (id: string) =>
      apiBase.patch(`/training/${id}/activate-progress`),
  });

  return { startTraining, isStartingTraning };
}
