"use client";
import Image from "next/image";
import { BsFillPlayFill, BsStopCircle } from "react-icons/bs";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/buttons/Button";
import {
  ExercisePtBrStatus,
  ExerciseWithComputedFields,
} from "@/types/Exercise";
import { twMerge } from "tailwind-merge";

interface ExerciseCardProps {
  exercise?: ExerciseWithComputedFields;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [isRunning, setIsRunnig] = useState(false);

  const handleChanExerciciStatus = useCallback(() => {
    setIsRunnig((currentStatus) => !currentStatus);
  }, []);

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
      <div className="flex flex-col w-full">
        <h3 className="font-semibold text-sm md:text-base text-heading dark:text-white mb-2">
          {/* { ExercisePtBrStatus?.[exercise!.status]} */}
        </h3>

        {exercise?.description && (
          <p className="line-clamp-3 text-sm mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        )}

        <div
          className={twMerge(
            "flex flex-col sm:flex-row items-center justify-between gap-1 w-full"
          )}
        >
          <span className="mt-auto">Em progresso</span>
          <Button
            className="ml-auto"
            leftIcon={isRunning ? <BsStopCircle /> : <BsFillPlayFill />}
            variantStyle={isRunning ? "danger" : "primary"}
            onClick={handleChanExerciciStatus}
          >
            {isRunning ? "Finalizar" : "Iniciar"} exercício
          </Button>
        </div>
      </div>
    </div>
  );
}
