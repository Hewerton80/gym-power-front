"use client";
import { useGetStudent } from "@/hooks/api/useStudent";
import { useParams } from "next/navigation";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { isUndefined } from "@/utils/isType";
import { useMemo } from "react";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { Card } from "@/components/ui/cards/Card";

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
    return <></>;
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
