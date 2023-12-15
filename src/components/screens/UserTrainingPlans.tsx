"use client";
import { useGetStudent } from "@/hooks/api/useUser";
import { useParams } from "next/navigation";
import { FeedBackError } from "../ui/feedback/FeedBackError";
import { isUndefined } from "@/shared/isType";
import { useMemo } from "react";
import { FeedBackLoading } from "../ui/feedback/FeedBackLoading";
import { Card } from "@/components/ui/cards/Card";
import { differenceInYears } from "date-fns";
import { TrainingCard } from "../ui/cards/TrainingCard";
import { Accordion } from "../ui/dataDisplay/Accordion";
import { Badge } from "../ui/dataDisplay/Badge";

interface IUserTrainingPlansProps {
  studendId: string;
}

export function UserTrainingPlans({ studendId }: IUserTrainingPlansProps) {
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
        <div className="flex flex-wrap gap-4 mb-8">
          <span>
            <b> Altura:</b> {student?.heightInMt}M
          </span>
          {" | "}
          <span>
            <b>Peso:</b> {student?.weightInKg}kg
          </span>
          {" | "}
          <span>
            <b>sexo:</b> {student?.gender}
          </span>
          {" | "}
          <span>
            <b>Idade:</b> {student?.age ? `${student?.age} anos` : "-"}
          </span>
        </div>
        <Accordion.Root type="single" asChild collapsible>
          <div className="flex flex-col space-y-2">
            {student?.trainingPlan?.trainings?.map((training, i) => (
              <Accordion.Item key={training?.id} value={String(i)}>
                <Accordion.Trigger className="flex w-full">
                  <TrainingCard
                    hideStartTrainingButton
                    hideGoToTrainingButton
                    training={training}
                  />
                </Accordion.Trigger>
                <Accordion.Content>
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
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </div>
        </Accordion.Root>
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
