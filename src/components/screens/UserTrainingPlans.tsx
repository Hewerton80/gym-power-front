"use client";
import { useGetStudent } from "@/hooks/api/useUser";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { isUndefined } from "@/shared/isType";
import { useMemo } from "react";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { Card } from "@/components/ui/cards/Card";
import { TrainingCard } from "@/components/ui/cards/TrainingCard";
import { Accordion } from "@/components/ui/dataDisplay/Accordion";
import { Callout } from "@/components/ui/feedback/Callout";
import { Button } from "@/components/ui/buttons/Button";
import Link from "next/link";

interface IUserTrainingPlansProps {
  studendId: string;
}

export function UserTrainingPlans({ studendId }: IUserTrainingPlansProps) {
  const {
    studentError,
    isLoadingStudent,
    student,
    personalInfosList,
    refetchStudent,
  } = useGetStudent(studendId);

  const hasTrainingPlan = useMemo(() => {
    return Boolean(student?.trainingPlan);
  }, [student]);

  const handledContent = useMemo(() => {
    if (studentError) {
      return <FeedBackError onTryAgain={refetchStudent} />;
    }
    if (isLoadingStudent || isUndefined(student)) {
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
        {hasTrainingPlan ? (
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
        ) : (
          <Callout variant="info">Não há plano de treino cadastrado</Callout>
        )}
      </div>
    );
  }, [
    studentError,
    hasTrainingPlan,
    isLoadingStudent,
    student,
    personalInfosList,
    refetchStudent,
  ]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{student?.name}</Card.Title>
        <Card.Actions>
          {student && (
            <Button asChild>
              <Link
                href={`/teacher/students/${student?.id}/create-training-plan`}
              >
                {hasTrainingPlan ? "Editar" : "Criar"} Plano de treino
              </Link>
            </Button>
          )}
        </Card.Actions>
      </Card.Header>
      <Card.Body>{handledContent}</Card.Body>
    </Card>
  );
}
