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

  // const { control } = useForm<ITrainingPlanForm>({
  //   defaultValues: { name: "", studentId, trainings: [] },
  //   mode: "onTouched",
  //   resolver: zodResolver(trainingPlanSchema),
  // });

  // const {
  //   fields: trainingsFields,
  //   append,
  //   prepend,
  //   remove,
  //   swap,
  //   move,
  //   insert,
  // } = useFieldArray({
  //   control,
  //   name: "trainings",
  // });

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
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mb-4">
          {personalInfosList?.map((info, i) => (
            <span key={i} className="text-xs sm:text-base">
              <b>{info.label}:</b> {info.value}
            </span>
          ))}
        </div>
        {/* <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-12 gap-x-8 gap-y-4 w-full">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Input
                  formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                  required
                  label="Nome do plano de treino"
                  placeholder="Treino para hipertrofia"
                  error={fieldState?.error?.message}
                  {...field}
                />
              )}
            />
            <div className="flex flex-col grid-cols-12">
              {trainingsFields.map((training, i) => (
                <></>
              ))}
            </div>
          </div>
        </form> */}
      </div>
    );
  }, [
    studentError,
    isLoadingForm,
    personalInfosList,
    hasTrainingPlan,
    exercisesError,
    exercises,
    student,
    refetchStudent,
    refetchExercises,
  ]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Criar treino</Card.Title>
      </Card.Header>
      <Card.Body>{handledContent}</Card.Body>
    </Card>
  );
};
