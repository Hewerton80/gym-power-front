import { apiBase } from "@/lib/apiBase";
import { IWorkout } from "@/types/Workout";
import { useQuery } from "@tanstack/react-query";

export function useGetMyWorkouts() {
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
