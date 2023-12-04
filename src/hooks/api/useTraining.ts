import { TrainingWithComputedFields } from "@/types/Training";
import { useMemo } from "react";

export function useGetMyTrainings(trainings?: TrainingWithComputedFields[]) {
  const recommendedTraingToDay = useMemo(() => {
    const index =
      trainings?.findIndex((training) => training.isRecommendedToDay) || [];
    return trainings?.[Number(index)];
  }, [trainings]);

  return { recommendedTraingToDay };
}
