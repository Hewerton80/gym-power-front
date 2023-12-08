import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";

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
