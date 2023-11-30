import { ITraining } from "@/types/Training";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";

export function useGetMyTrainings() {
  const { apiBase } = useAxios();

  const {
    data: trainings,
    isFetching: isloadingTrainings,
    error: trainingsError,
    refetch: refetchTrainings,
  } = useQuery({
    queryFn: () =>
      apiBase
        .get<ITraining[]>("/me/training-plan-history")
        .then((res) => res.data || []),
    queryKey: [],
    enabled: false,
    retry: 0,
  });

  return {
    trainings,
    isloadingTrainings,
    trainingsError,
    refetchTrainings,
  };
}
