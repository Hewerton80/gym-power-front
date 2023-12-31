"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { useGetTraining, useMutateTraning } from "@/hooks/api/useTraining";
import { isUndefined } from "@/shared/isType";
import { ExerciseWithComputedFields } from "@/types/Exercise";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BsFillPlayFill, BsStopCircle } from "react-icons/bs";
import { useMudateExercise } from "@/hooks/api/useExercise";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { handleErrorMessage } from "@/shared/handleErrorMessage";
import { ExerciseStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ExerciseCard } from "@/components/ui/cards/ExerciseCard";

export default function TrainingPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { showAlert } = useAlertModal();
  const { isLoadingTraining, training, trainingError, refetchTraining } =
    useGetTraining(params?.id);

  const { finishTraining, isFinishingTraning } = useMutateTraning();

  const { startExercise, finishExercise } = useMudateExercise();

  const [exercisesState, setExercisesState] = useState<
    ExerciseWithComputedFields[]
  >([]);

  const [indexExerciseIsLoading, setIndexExerciseIsLoading] = useState(-1);

  const allExercisesFinished = useMemo(() => {
    return exercisesState.every((exercise) => exercise?.status === "FINISHED");
  }, [exercisesState]);

  useEffect(() => {
    if (Array.isArray(training?.exercises)) {
      setExercisesState(training?.exercises || []);
    }
  }, [training?.exercises]);

  const handleUpdateExerciseStatus = useCallback(
    (index: number, status: ExerciseStatus) => {
      setIndexExerciseIsLoading(index);
      const exercise = exercisesState[index];

      const onSuccess = () => {
        setIndexExerciseIsLoading(-1);
        setExercisesState((oldState) => {
          const newState = [...oldState];
          newState[index] = { ...newState[index], status };
          return newState;
        });
      };

      let titleError = "";
      if (status === "IN_PROGRESS") {
        titleError = "Erro ao iniciar exercício";
      }
      if (status === "FINISHED") {
        titleError = "Erro ao finalizar exercício";
      }

      const onError = (error: any) => {
        setIndexExerciseIsLoading(-1);
        showAlert({
          title: titleError,
          description: handleErrorMessage(error),
          variant: "danger",
        });
      };

      if (status === "IN_PROGRESS") {
        startExercise(String(exercise?.trainingExerciseId), {
          onSuccess,
          onError,
        });
      }
      if (status === "FINISHED") {
        finishExercise(String(exercise?.trainingExerciseId), {
          onSuccess,
          onError,
        });
      }
    },
    [exercisesState, showAlert, startExercise, finishExercise]
  );

  const handleFinishTraining = useCallback(() => {
    if (!allExercisesFinished) {
      return;
    }
    const onSuccess = () => {
      showAlert({
        title: "Treino finalizadocom sucesso",
        variant: "default",
        onClose: () => {
          router.replace("/student/home");
        },
      });
    };
    const onError = (error: any) => {
      showAlert({
        title: "Erro ao finalizar treino",
        description: handleErrorMessage(error),
        variant: "danger",
      });
    };
    finishTraining(String(training?.id), { onSuccess, onError });
  }, [training, router, allExercisesFinished, showAlert, finishTraining]);

  const exercisesElement = useMemo(() => {
    return exercisesState?.map((exercise, i) => (
      <ExerciseCard
        key={exercise?.id}
        exercise={exercise}
        actionButtonElement={
          <>
            {exercise?.status === "READY_TO_START" && (
              <Button
                className="ml-auto"
                leftIcon={<BsFillPlayFill />}
                variantStyle="primary"
                isLoading={indexExerciseIsLoading === i}
                onClick={() => handleUpdateExerciseStatus(i, "IN_PROGRESS")}
              >
                Iniciar
              </Button>
            )}
            {exercise?.status === "IN_PROGRESS" && (
              <Button
                className="ml-auto"
                leftIcon={<BsStopCircle />}
                variantStyle="danger"
                isLoading={indexExerciseIsLoading === i}
                onClick={() => handleUpdateExerciseStatus(i, "FINISHED")}
              >
                Finalizar
              </Button>
            )}
            {exercise?.status === "FINISHED" && (
              <Button className="ml-auto" variantStyle="success" disabled>
                Finalizado
              </Button>
            )}
          </>
        }
      />
    ));
  }, [exercisesState, indexExerciseIsLoading, handleUpdateExerciseStatus]);

  const handleContent = useMemo(() => {
    if (trainingError) {
      return <FeedBackError onTryAgain={refetchTraining} />;
    }
    if (isLoadingTraining || isUndefined(training)) {
      return <FeedBackLoading />;
    }
    return (
      <>
        <Card.Header>
          <Card.Title>{training?.title}</Card.Title>
        </Card.Header>
        <Card.Body className="space-y-4">{exercisesElement}</Card.Body>
        <Card.Footer>
          <Button
            disabled={!allExercisesFinished}
            isLoading={isFinishingTraning}
            onClick={handleFinishTraining}
            fullWidth
          >
            Finalizar treino
          </Button>
        </Card.Footer>
      </>
    );
  }, [
    isFinishingTraning,
    trainingError,
    isLoadingTraining,
    exercisesElement,
    training,
    allExercisesFinished,
    refetchTraining,
    handleFinishTraining,
  ]);

  return <Card.Root>{handleContent}</Card.Root>;
}
