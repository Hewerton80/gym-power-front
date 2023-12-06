"use client";
import { TrainingWithComputedFields } from "@/types/Training";
import { Button } from "../../buttons/Button";
import { Badge } from "../../dataDisplay/Badge";
import { twMerge } from "tailwind-merge";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useCallback, useEffect } from "react";
import { useMutateTraning } from "@/hooks/api/useTraining";
import { getErrorMessage } from "@/shared/getErrorMenssage";
import { useRouter } from "next/navigation";

interface TrainingCardProps {
  training?: TrainingWithComputedFields;
}

export function TrainingCard({ training }: TrainingCardProps) {
  const router = useRouter();
  const { showAlert } = useAlertModal();

  const { startTraining } = useMutateTraning();

  const goToTrainingPage = useCallback(() => {
    router.push(`/student/training/${training?.id}`);
  }, [router, training]);

  const handleStartTraining = useCallback(() => {
    const onSuccess = goToTrainingPage;

    const onError = (error: any) => {
      showAlert({
        title: "Erro ao iniciar treino",
        description: getErrorMessage(error),
        variant: "danger",
      });
    };

    showAlert({
      title: "Tem certeza que deseja iniciar treino?",
      showCancelButton: true,
      confirmButtonText: "Sim, iniciar treino",
      cancelButtonText: "Depois",
      isAsync: true,
      onClickConfirmButton: () => {
        startTraining(training?.id || "", { onSuccess, onError });
      },
    });
  }, [training, showAlert, startTraining, goToTrainingPage]);

  return (
    <div
      className={twMerge(
        "flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 p-4",
        "border-b-border border-b rounded-[1.25rem]"
      )}
    >
      <div className="flex gap-4">
        <div
          className={twMerge(
            "flex justify-center items-center",
            "w-[3.75rem] h-[3.75rem] md:w-16 md:h-16 aspect-square",
            "bg-primary/20 rounded-[0.625rem]"
          )}
        >
          <strong className="text-primary text-lg">
            {training?.title?.split(" - ")?.[0]}
          </strong>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm md:text-lg font-medium text-heading dark:text-light">
            {training?.title?.split(" - ")?.[1]}
          </h4>
          {training?.isRecommendedToDay && (
            <Badge variant="warning">Recomendado</Badge>
          )}
        </div>
      </div>
      <div className="flex">
        <Button onClick={handleStartTraining}>Iniciar treino</Button>
      </div>
    </div>
  );
}
