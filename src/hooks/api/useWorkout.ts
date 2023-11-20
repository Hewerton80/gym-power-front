import { IWorkout } from "@/types/Workout";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";

export function useGetMyWorkouts() {
  const { apiBase } = useAxios();

  const {
    data: workouts,
    isPending: isloadingWorkouts,
    error: workoutsError,
    refetch: refetchWorkouts,
  } = useQuery({
    queryFn: () =>
      apiBase.get<IWorkout[]>("/me/training").then((res) => res.data || []),
    queryKey: [],
    retry: 0,
  });

  return {
    workouts,
    isloadingWorkouts,
    workoutsError,
    refetchWorkouts,
  };
}
