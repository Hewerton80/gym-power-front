"use client";
import { useGetStudent } from "@/hooks/api/useUser";
import { Card } from "../ui/cards/Card";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { isUndefined } from "@/shared/isType";
import { Input } from "../ui/forms/Input";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetExercises } from "@/hooks/api/useExercise";
import { Select } from "../ui/forms/Select";
import { Button } from "../ui/buttons/Button";
import { z } from "zod";
import { Modal } from "../ui/overlay/Modal";
import { ExerciseCard } from "../ui/cards/ExerciseCard";
import { ExerciseWithComputedFields } from "@/types/Exercise";
import { trainingSchema } from "@/hooks/api/useTraining";
import { FaPen } from "react-icons/fa";
import { IconButton } from "../ui/buttons/IconButton";

interface ITrainingFormProps {
  studentId: string;
}

export const TrainingForm = ({ studentId }: ITrainingFormProps) => {
  const {
    studentError,
    isLoadingStudent,
    student,
    personalInfosList,
    refetchStudent,
  } = useGetStudent(studentId);

  const { exercises, exercisesError, isFetchingExercises, refetchExercises } =
    useGetExercises();

  const defaultTrainigFormValues = useMemo<z.infer<typeof trainingSchema>>(
    () => ({
      exerciseOption: null,
      intervalInSeconds: "60",
      order: "1",
    }),
    []
  );

  const { control, reset, handleSubmit } = useForm<
    z.infer<typeof trainingSchema>
  >({
    defaultValues: defaultTrainigFormValues,
    mode: "onTouched",
    resolver: zodResolver(trainingSchema),
  });

  const [stateExercises, setStateTrainings] = useState<
    z.infer<typeof trainingSchema>[]
  >([]);

  const [stateExerciseIndexToEdit, setStateExerciseIndexToEdit] = useState(-1);

  const [openExerciseFormModal, setOpenExerciseFormModal] = useState(false);

  const hasTrainingPlan = useMemo(() => {
    return Boolean(student?.trainingPlan);
  }, [student?.trainingPlan]);

  const isLoadingForm = useMemo(
    () => isLoadingStudent || isFetchingExercises,
    [isLoadingStudent, isFetchingExercises]
  );

  const exercisesMapped = useMemo<{
    [key: string]: ExerciseWithComputedFields;
  }>(() => {
    const exercisesMappedTmp: { [key: string]: ExerciseWithComputedFields } =
      {};
    exercises?.forEach((exercise) => {
      exercisesMappedTmp[String(exercise?.id)] = exercise;
    });
    return exercisesMappedTmp;
  }, [exercises]);

  const stateExercisesMapped = useMemo<{
    [key: string]: z.infer<typeof trainingSchema>;
  }>(() => {
    const stateExercisesMappedTmp: {
      [key: string]: z.infer<typeof trainingSchema>;
    } = {};
    stateExercises?.forEach((exercise) => {
      stateExercisesMappedTmp[String(exercise?.exerciseOption?.value)] =
        exercise;
    });
    return stateExercisesMappedTmp;
  }, [stateExercises]);

  const exercisesOptions = useMemo(
    () =>
      exercises
        ?.filter((exercise) => !stateExercisesMapped[String(exercise?.id)])
        ?.map((exercise) => ({
          value: exercise?.id || "",
          label: exercise?.name || "",
        })) || [],
    [exercises, stateExercisesMapped]
  );

  const handleOpenExerciseFormModal = useCallback(() => {
    setOpenExerciseFormModal(true);
    if (stateExerciseIndexToEdit >= 0) {
      const stateExercise = stateExercises[stateExerciseIndexToEdit];
      reset({
        exerciseOption: stateExercise?.exerciseOption,
        intervalInSeconds: stateExercise?.intervalInSeconds,
        order: stateExercise?.order,
      });
    }
  }, [stateExerciseIndexToEdit, stateExercises, reset]);

  const handleCloseExerciseFormModal = useCallback(() => {
    setOpenExerciseFormModal(false);
    reset(defaultTrainigFormValues);
    setStateExerciseIndexToEdit(-1);
  }, [defaultTrainigFormValues, reset]);

  const handleSubmitiExercise = useCallback(
    (exerviseFormValues: z.infer<typeof trainingSchema>) => {
      console.log({ exerviseFormValues });
      if (stateExerciseIndexToEdit >= 0) {
        setStateTrainings(([...prev]) => {
          prev[stateExerciseIndexToEdit] = exerviseFormValues;
          return prev;
        });
      } else {
        setStateTrainings(([...prev]) => {
          prev.push({ ...exerviseFormValues, order: String(prev.length + 1) });
          return prev;
        });
      }
      handleCloseExerciseFormModal();
    },
    [stateExerciseIndexToEdit, handleCloseExerciseFormModal]
  );

  const exercisesElement = useMemo(() => {
    if (stateExercises.length === 0) return <></>;
    return (
      <>
        <span className="text-xs sm:text-base">
          <b>Exercícios adicionados:</b>
        </span>
        {stateExercises?.map((exercise, i) => (
          <ExerciseCard
            key={`${i}-exercise-card`}
            exercise={{
              ...exercisesMapped[String(exercise.exerciseOption?.value)],
              intervalInSeconds: Number(exercise.intervalInSeconds),
              order: Number(exercise.order),
            }}
            actionButtonElement={
              <IconButton
                onClick={() => setStateExerciseIndexToEdit(i)}
                icon={<FaPen />}
              />
            }
          />
        ))}
      </>
    );
  }, [stateExercises, exercisesMapped]);

  const handledContent = useMemo(() => {
    if (studentError) {
      return <FeedBackError onTryAgain={refetchStudent} />;
    }
    if (exercisesError) {
      return <FeedBackError onTryAgain={refetchExercises} />;
    }
    if (isLoadingForm || isUndefined(student) || isUndefined(exercises)) {
      return <FeedBackLoading />;
    }
    return (
      <div className="flex flex-col space-y-4">
        {hasTrainingPlan && (
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-base">
              <b>Plano de treino:</b> {student?.trainingPlan?.name}{" "}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-base">
            <b>Aluno:</b> {student?.name}{" "}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1">
          {personalInfosList?.map((info, i) => (
            <span key={i} className="text-xs sm:text-base">
              <b>{info.label}:</b> {info.value}
            </span>
          ))}
        </div>
        <div className="border border-border dark:border-dark-border" />
        <div className="flex flex-col space-y-4">{exercisesElement}</div>
        <Button onClick={handleOpenExerciseFormModal} fullWidth>
          Adicionar Exercício
        </Button>
      </div>
    );
  }, [
    studentError,
    exercisesError,
    isLoadingForm,
    student,
    exercises,
    hasTrainingPlan,
    personalInfosList,
    exercisesElement,
    refetchStudent,
    refetchExercises,
    handleOpenExerciseFormModal,
  ]);

  useEffect(() => {
    if (stateExerciseIndexToEdit >= 0) {
      handleOpenExerciseFormModal();
    }
  }, [stateExerciseIndexToEdit, handleOpenExerciseFormModal]);

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Criar treino</Card.Title>
        </Card.Header>
        <Card.Body>{handledContent}</Card.Body>
      </Card>
      <Modal.Root
        show={openExerciseFormModal}
        onClose={handleCloseExerciseFormModal}
        disableBackdropClick
      >
        <Modal.Title>
          {stateExerciseIndexToEdit >= 0 ? "Editar" : "Adicionar"} exercício
        </Modal.Title>
        <Modal.Body asChild>
          <form
            className="grid grid-cols-2 gap-x-8 gap-y-4 w-full"
            onSubmit={handleSubmit(handleSubmitiExercise)}
          >
            <Controller
              control={control}
              name="exerciseOption"
              render={({ field: { onChange, ...restField }, fieldState }) => (
                <Select
                  formControlClassName="col-span-2"
                  required
                  label="Exercício"
                  isAutocomplite
                  options={exercisesOptions}
                  onChangeSingleOption={onChange}
                  error={fieldState.error?.message}
                  {...restField}
                />
              )}
            />
            <Controller
              control={control}
              name="intervalInSeconds"
              render={({ field, fieldState }) => (
                <Input
                  formControlClassName="col-span-1"
                  required
                  label="Descanso entre séries (s)"
                  error={fieldState.error?.message}
                  type="number"
                  {...field}
                />
              )}
            />
            <div className="col-span-2 flex justify-end gap-4">
              <Button
                variantStyle="light"
                onClick={handleCloseExerciseFormModal}
              >
                Fechar
              </Button>
              <Button type="submit" variantStyle="primary">
                {stateExerciseIndexToEdit >= 0 ? "Editar" : "Adicionar"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Root>
    </>
  );
};
