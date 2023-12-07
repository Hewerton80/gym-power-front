"use client";
import Image from "next/image";
import { BsFillPlayFill, BsStopCircle } from "react-icons/bs";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/buttons/Button";
import { ExerciseWithComputedFields } from "@/types/Exercise";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { ExerciseHistoryWithComputedFields } from "@/types/TrainingExerciseHistory";
import { ExerciseStatus } from "@prisma/client";
import { sleep } from "@/shared/sleep";

interface ExerciseCardProps {
  exercise?: ExerciseWithComputedFields;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [cacheTrainigState, setCatchTrainigState] =
    useState<ExerciseHistoryWithComputedFields>(() => {
      const cacheTrainig = Cookies.get(String(exercise?.trainingExerciseId));
      console.log({ cacheTrainig });
      if (cacheTrainig) {
        return JSON.parse(cacheTrainig) as ExerciseHistoryWithComputedFields;
      }
      return {
        id: "",
        trainingExerciseId: String(exercise?.trainingExerciseId),
        exerciseId: String(exercise?.id),
        startDate: null,
        endDate: null,
      } as ExerciseHistoryWithComputedFields;
    });

  const [isLoading, setIsLoading] = useState(false);

  const exerciseStatus = useMemo<ExerciseStatus>(() => {
    if (cacheTrainigState?.startDate && !cacheTrainigState?.endDate) {
      return "IN_PROGRESS";
    }
    if (cacheTrainigState?.startDate && cacheTrainigState?.endDate) {
      return "FINISHED";
    }
    return "READY_TO_START";
  }, [cacheTrainigState]);

  const handleStartExercise = useCallback(async () => {
    setIsLoading(true);
    await sleep(1000);
    const newCasheTrainigState: ExerciseHistoryWithComputedFields = {
      id: "",
      trainingExerciseId: String(exercise?.trainingExerciseId),
      exerciseId: String(exercise?.id),
      startDate: new Date(),
      endDate: null,
    };
    setCatchTrainigState(newCasheTrainigState);
    Cookies.set(
      String(exercise?.trainingExerciseId),
      JSON.stringify(newCasheTrainigState)
    );
    setIsLoading(false);
  }, [exercise]);

  const handleFinishExercise = useCallback(async () => {
    setIsLoading(true);
    await sleep(1000);
    const newCasheTrainigState: ExerciseHistoryWithComputedFields = {
      ...cacheTrainigState,
      endDate: new Date(),
    };
    setCatchTrainigState(newCasheTrainigState);
    Cookies.set(
      String(exercise?.trainingExerciseId),
      JSON.stringify(newCasheTrainigState)
    );
    setIsLoading(false);
  }, [cacheTrainigState, exercise]);

  return (
    <div
      className={twMerge(
        "flex flex-col lg:flex-row items-center lg:items-start gap-4 pb-4 border-b border-border"
      )}
    >
      <Image
        className="w-[7.5rem]"
        width={120}
        height={135}
        alt="exercice"
        src={exercise?.image || ""}
      />
      <div className="flex flex-col h-full w-full">
        <h3 className="font-semibold text-sm md:text-base text-heading dark:text-white mb-2">
          {exercise?.name}
        </h3>

        {exercise?.description && (
          <p className="line-clamp-3 text-sm mb-1">{exercise?.description}</p>
        )}

        <div
          className={twMerge(
            "flex flex-col sm:flex-row items-center  gap-1 w-full h-full"
          )}
        >
          {exerciseStatus === "READY_TO_START" && (
            <Button
              className="ml-auto"
              leftIcon={<BsFillPlayFill />}
              variantStyle="primary"
              onClick={handleStartExercise}
              isLoading={isLoading}
            >
              Iniciar exercício
            </Button>
          )}
          {exerciseStatus === "IN_PROGRESS" && (
            <Button
              className="ml-auto"
              leftIcon={<BsStopCircle />}
              variantStyle="danger"
              onClick={handleFinishExercise}
              isLoading={isLoading}
            >
              Finalizar exercício
            </Button>
          )}
          {exerciseStatus === "FINISHED" && (
            <Button className="ml-auto" variantStyle="success" disabled>
              Finalizado
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
