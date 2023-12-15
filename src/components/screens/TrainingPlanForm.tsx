"use client";
import { useGetStudent } from "@/hooks/api/useUser";
import { Card } from "../ui/cards/Card";
import { useMemo } from "react";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { isUndefined } from "@/shared/isType";
import { Input } from "../ui/forms/Input";

interface ITrainingPlanFormProps {
  studendId: string;
}

export const TrainingPlanForm = ({ studendId }: ITrainingPlanFormProps) => {
  const {
    studentError,
    isLoadingStudent,
    student,
    personalInfosList,
    refetchStudent,
  } = useGetStudent(studendId);

  const isLoadingForm = useMemo(() => isLoadingStudent, [isLoadingStudent]);

  const handledContent = useMemo(() => {
    if (studentError) {
      return <FeedBackError onTryAgain={refetchStudent} />;
    }
    if (isLoadingForm || isUndefined(student)) {
      return <FeedBackLoading />;
    }
    return (
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mb-4 sm:mb-8">
          {personalInfosList?.map((info, i) => (
            <span key={i} className="text-xs sm:text-base">
              <b>{info.label}:</b> {info.value}
            </span>
          ))}
        </div>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-12 gap-x-8 gap-y-4 w-full">
            <Input
              formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
              required
              label="Nome do treino"
              placeholder="Treino para hipertrofia"
            />
          </div>
        </form>
      </div>
    );
  }, [studentError, personalInfosList, isLoadingForm, student, refetchStudent]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Criar plano de treino</Card.Title>
      </Card.Header>
      <Card.Body>{handledContent}</Card.Body>
    </Card>
  );
};
