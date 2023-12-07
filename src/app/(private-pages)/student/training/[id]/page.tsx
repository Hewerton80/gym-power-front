"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { useGetTraining } from "@/hooks/api/useTraining";
import { isUndefined } from "@/shared/isType";
import { ExerciseWithComputedFields } from "@/types/Exercise";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BsFillPlayFill, BsStopCircle } from "react-icons/bs";

export default function TrainingPage() {
  const params = useParams<{ id: string }>();
  const { isTrainingLoading, training, trainingError, refetchTraining } =
    useGetTraining(params?.id);

  const [exercisesState, setExercisesState] = useState<
    ExerciseWithComputedFields[]
  >([]);

  useEffect(() => {
    if (Array.isArray(training?.exercises)) {
      setExercisesState(training?.exercises || []);
    }
  }, [training?.exercises]);

  const exercisesElement = useMemo(() => {
    return exercisesState?.map((exercise) => (
      <div
        key={exercise?.id}
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
            {exercise?.status === "READY_TO_START" && (
              <Button
                className="ml-auto"
                leftIcon={<BsFillPlayFill />}
                variantStyle="primary"
                // onClick={handleStartExercise}
                // isLoading={isLoading}
              >
                Iniciar exercício
              </Button>
            )}
            {exercise?.status === "IN_PROGRESS" && (
              <Button
                className="ml-auto"
                leftIcon={<BsStopCircle />}
                variantStyle="danger"
                // onClick={handleFinishExercise}
                // isLoading={isLoading}
              >
                Finalizar exercício
              </Button>
            )}
            {exercise?.status === "FINISHED" && (
              <Button className="ml-auto" variantStyle="success" disabled>
                Finalizado
              </Button>
            )}
          </div>
        </div>
      </div>
    ));
  }, [exercisesState]);

  const handleContent = useMemo(() => {
    if (trainingError) {
      return <FeedBackError onTryAgain={refetchTraining} />;
    }
    if (isTrainingLoading || isUndefined(training)) {
      return <FeedBackLoading />;
    }
    return (
      <>
        <Card.Header>
          <Card.Title>{training?.title}</Card.Title>
        </Card.Header>
        <Card.Body className="space-y-4">{exercisesElement}</Card.Body>
      </>
    );
  }, [
    trainingError,
    isTrainingLoading,
    exercisesElement,
    training,
    refetchTraining,
  ]);

  return <Card>{handleContent}</Card>;
}
