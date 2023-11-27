"use client";
import { useGetStudent } from "@/hooks/api/useStudent";
import { useParams } from "next/navigation";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { isUndefined } from "@/utils/isType";
import { useMemo } from "react";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { Card } from "@/components/ui/cards/Card";
import { differenceInYears } from "date-fns";

interface ITrainingPlansProps {
  studendId: string;
}

export function TrainingPlans({ studendId }: ITrainingPlansProps) {
  const { studentError, isLoadingStudent, student, refetchStudent } =
    useGetStudent(studendId);

  const isLoadingPage = useMemo(() => isLoadingStudent, [isLoadingStudent]);

  const handledContent = useMemo(() => {
    if (studentError) {
      return <FeedBackError onTryAgain={refetchStudent} />;
    }
    if (isLoadingPage || isUndefined(student)) {
      return <FeedBackLoading />;
    }
    return (
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-4 ">
          <span>
            <b> Altura:</b> {student?.heightInMt}M
          </span>
          <span>
            <b>Peso:</b> {student?.weightInKg}kg
          </span>
          <span>
            <b>sexo:</b> {student?.gender}
          </span>
          <span>
            <b>Idade:</b>{" "}
            {student?.dateOfBirth
              ? `${differenceInYears(
                  new Date(),
                  new Date(student?.dateOfBirth)
                )} anos`
              : "-"}
          </span>
        </div>
      </div>
    );
  }, [studentError, isLoadingPage, student, refetchStudent]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{student?.name}</Card.Title>
      </Card.Header>
      <Card.Body>{handledContent}</Card.Body>
    </Card>
  );
}
