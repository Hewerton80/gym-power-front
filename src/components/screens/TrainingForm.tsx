"use client";
import { useGetStudent } from "@/hooks/api/useUser";
import { Card } from "../ui/cards/Card";
import { useMemo } from "react";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { isUndefined } from "@/shared/isType";
import { Input } from "../ui/forms/Input";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetExercises } from "@/hooks/api/useExercise";
import { ITrainingForm, trainingSchema } from "@/hooks/api/useTraining";
import { Select } from "../ui/forms/Select";

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

  const { control } = useForm<ITrainingForm>({
    defaultValues: {
      exercises: [
        { exerciseOption: null, intervalInSeconds: "60", order: "1" },
      ],
    },
    mode: "onTouched",
    resolver: zodResolver(trainingSchema),
  });

  const {
    fields: trainingsFields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control,
    name: "exercises",
  });

  const hasTrainingPlan = useMemo(() => {
    return Boolean(student?.trainingPlan);
  }, [student?.trainingPlan]);

  const isLoadingForm = useMemo(
    () => isLoadingStudent || isFetchingExercises,
    [isLoadingStudent, isFetchingExercises]
  );

  const exercisesOptions = useMemo(
    () =>
      exercises?.map((exercise) => ({
        label: exercise.name,
        value: exercise.id,
      })),
    [exercises]
  );

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
      <div className="flex flex-col">
        {hasTrainingPlan && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs sm:text-base">
              <b>Plano de treino:</b> {student?.trainingPlan?.name}{" "}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs sm:text-base">
            <b>Aluno:</b> {student?.name}{" "}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mb-4">
          {personalInfosList?.map((info, i) => (
            <span key={i} className="text-xs sm:text-base">
              <b>{info.label}:</b> {info.value}
            </span>
          ))}
        </div>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-col space-y-4 w-full">
            {trainingsFields.map((training, i) => (
              <div className="grid grid-cols-12 gap-8 w-full" key={training.id}>
                <Controller
                  control={control}
                  name={`exercises.${i}.exerciseOption`}
                  render={({ field, fieldState }) => (
                    <Select
                      required
                      formControlClassName="col-span-6"
                      label="Exercício"
                      isAutocomplite
                      options={exercisesOptions}
                      error={fieldState.error?.message}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`exercises.${i}.intervalInSeconds`}
                  render={({ field, fieldState }) => (
                    <Input
                      required
                      formControlClassName="col-span-3"
                      label="Descanso entre séries"
                      error={fieldState.error?.message}
                      type="number"
                      {...field}
                    />
                  )}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }, [
    studentError,
    isLoadingForm,
    personalInfosList,
    hasTrainingPlan,
    student,
    exercisesError,
    exercises,
    trainingsFields,
    exercisesOptions,
    control,
    refetchStudent,
    refetchExercises,
  ]);

  return (
    <Card className="overflow-visible">
      <Card.Header>
        <Card.Title>Criar treino</Card.Title>
      </Card.Header>
      <Card.Body>{handledContent}</Card.Body>
    </Card>
  );
};
