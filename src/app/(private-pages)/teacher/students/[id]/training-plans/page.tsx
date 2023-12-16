"use client";
import { useParams } from "next/navigation";
import { useGetStudent } from "@/hooks/api/useUser";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { isUndefined } from "@/shared/isType";
import { useCallback, useMemo, useState } from "react";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { Card } from "@/components/ui/cards/Card";
import { TrainingCard } from "@/components/ui/cards/TrainingCard";
import { Callout } from "@/components/ui/feedback/Callout";
import { Button } from "@/components/ui/buttons/Button";
import Link from "next/link";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { FaPen } from "react-icons/fa";
import { HiperLink } from "@/components/ui/navigation/HiperLink";
import { Controller, useForm } from "react-hook-form";
import {
  ITrainingPlanForm,
  useMudateTrainingPlan,
} from "@/hooks/api/useTrainingPlan";
import { trainingPlanSchema } from "@/lib/apiZodSchemas.ts/trainingPlanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/overlay/Modal";
import { Input } from "@/components/ui/forms/Input";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { handleErrorMessage } from "@/shared/handleErrorMessage";
export default function UserTrainingPlansPage() {
  const { id: studentId } = useParams<{ id: string }>();
  const { showAlert } = useAlertModal();
  const {
    studentError,
    isLoadingStudent,
    student,
    personalInfosList,
    refetchStudent,
  } = useGetStudent(studentId);

  const { isSubmitingTrainingPlan, createTrainingPlan, updateTrainingPlan } =
    useMudateTrainingPlan();

  const { control, formState, reset, handleSubmit } =
    useForm<ITrainingPlanForm>({
      defaultValues: { name: "" },
      mode: "onTouched",
      resolver: zodResolver(trainingPlanSchema),
    });

  const [openTrainingPlanModal, setOpenTrainingPlanModal] = useState(false);

  const hasTrainingPlan = useMemo(() => {
    return Boolean(student?.trainingPlan);
  }, [student?.trainingPlan]);

  const handleOpenTrainingPlanModal = useCallback(() => {
    setOpenTrainingPlanModal(true);
    if (hasTrainingPlan) {
      reset({ name: student?.trainingPlan?.name });
    }
  }, [hasTrainingPlan, student?.trainingPlan?.name, reset]);

  const handleCloseTrainingPlanModal = useCallback(() => {
    setOpenTrainingPlanModal(false);
    reset({ name: "" });
  }, [reset]);

  const handleSubmitTrainingPlan = useCallback(
    (trainingPlanFormData: ITrainingPlanForm) => {
      const onSuccess = () => {
        toast.success(
          `Plano de treino ${
            hasTrainingPlan ? "editado" : "criado"
          } com sucesso`
        );
        handleCloseTrainingPlanModal();
        refetchStudent();
      };
      const onError = (error: any) => {
        showAlert({
          title: `Erro ao ${
            hasTrainingPlan ? "Editar" : "Criar"
          } plano de treino`,
          description: handleErrorMessage(error),
          variant: "danger",
        });
      };
      if (hasTrainingPlan) {
        updateTrainingPlan(
          { ...trainingPlanFormData, id: student?.trainingPlan?.id },
          { onSuccess, onError }
        );
      } else {
        createTrainingPlan(
          { ...trainingPlanFormData, studentId },
          { onSuccess, onError }
        );
      }
    },
    [
      studentId,
      student?.trainingPlan?.id,
      hasTrainingPlan,
      createTrainingPlan,
      refetchStudent,
      handleCloseTrainingPlanModal,
      showAlert,
      updateTrainingPlan,
    ]
  );

  const handledContent = useMemo(() => {
    if (studentError) {
      return <FeedBackError onTryAgain={refetchStudent} />;
    }
    if (isLoadingStudent || isUndefined(student)) {
      return <FeedBackLoading />;
    }
    return (
      <div className="flex flex-col">
        {hasTrainingPlan && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs sm:text-base">
              <b>Nome do plano de treino:</b> {student?.trainingPlan?.name}{" "}
              <HiperLink role="button" onClick={handleOpenTrainingPlanModal}>
                (Editar)
              </HiperLink>
            </span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mb-4">
          {personalInfosList?.map((info, i) => (
            <span key={i} className="text-xs sm:text-base">
              <b>{info.label}:</b> {info.value}
            </span>
          ))}
        </div>
        {hasTrainingPlan ? (
          <div className="flex flex-col space-y-2">
            {student?.trainingPlan?.trainings?.map((training, i) => (
              <div className="flex flex-col" key={training?.id}>
                <TrainingCard
                  hideStartTrainingButton
                  hideGoToTrainingButton
                  training={training}
                  customActionButton={
                    <IconButton
                      icon={
                        <Link href="/#">
                          <FaPen className="text-base" />
                        </Link>
                      }
                      asChild
                    />
                  }
                />
                <ul className="flex flex-col">
                  {training?.exercises?.map((exercise, j) => (
                    <li
                      className={
                        "text-xs sm:text-sm border-b border-border dark:border-dark py-1"
                      }
                      key={`${exercise?.id}-${i}-${j}`}
                    >
                      {exercise?.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Button fullWidth asChild>
              <Link href={`/teacher/students/${student?.id}/create-training`}>
                Adicionar treino
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <Callout variant="info">Não há plano de treino cadastrado</Callout>
            <Button fullWidth onClick={handleOpenTrainingPlanModal}>
              Criar Plano de treino
            </Button>
          </div>
        )}
      </div>
    );
  }, [
    studentError,
    hasTrainingPlan,
    isLoadingStudent,
    student,
    personalInfosList,
    handleOpenTrainingPlanModal,
    refetchStudent,
  ]);

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>{student?.name}</Card.Title>
          {/*<Card.Actions>
          {student && (
            <Button asChild>
              <Link
                href={`/teacher/students/${student?.id}/create-training-plan`}
              >
                {hasTrainingPlan ? "Editar" : "Criar"} Plano de treino
              </Link>
            </Button>
          )} 
        </Card.Actions>*/}
        </Card.Header>
        <Card.Body>{handledContent}</Card.Body>
      </Card>
      <Modal.Root
        show={openTrainingPlanModal}
        onClose={handleCloseTrainingPlanModal}
      >
        <Modal.Title>
          {hasTrainingPlan ? "Editar" : "Criar"} plano de treino
        </Modal.Title>
        <Modal.Body>
          <form
            className="flex flex-col gap-x-8 gap-y-4 w-full"
            onSubmit={handleSubmit(handleSubmitTrainingPlan)}
          >
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Input
                  required
                  label="Nome"
                  placeholder="Treino para hipertrofia"
                  error={fieldState?.error?.message}
                  {...field}
                />
              )}
            />

            <div className="flex gap-4 ml-auto">
              <Button
                variantStyle="light"
                onClick={handleCloseTrainingPlanModal}
                disabled={isSubmitingTrainingPlan}
              >
                Cancelar
              </Button>
              <Button
                disabled={!formState.isDirty}
                isLoading={isSubmitingTrainingPlan}
                type="submit"
                variantStyle="primary"
              >
                Salvar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Root>
    </>
  );
}
