import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";
import { ExerciseWithComputedFields } from "@/types/Exercise";

export function useMudateExercise() {
  const { apiBase } = useAxios();

  const { mutate: startExercise, isPending: isStartingExercise } = useMutation({
    mutationFn: (trainingExerciseId: string) =>
      apiBase.patch(`/training-exercise/${trainingExerciseId}/start`),
  });
  const { mutate: finishExercise, isPending: isFinishingExercise } =
    useMutation({
      mutationFn: (trainingExerciseId: string) =>
        apiBase.patch(`/training-exercise/${trainingExerciseId}/finish`),
    });
  return {
    isFinishingExercise,
    isStartingExercise,
    startExercise,
    finishExercise,
  };
}

export function useGetExercises() {
  const { apiBase } = useAxios();
  const {
    data: exercises,
    refetch: refetchExercises,
    isFetching: isLoadingExercises,
    error: exercisesError,
  } = useQuery({
    queryFn: () =>
      apiBase
        .get<ExerciseWithComputedFields[]>(`/exercises`)
        .then((res) => res.data),
    queryKey: ["exercises"],
  });
  return {
    exercises,
    exercisesError,
    isLoadingExercises,
    refetchExercises,
  };
}
