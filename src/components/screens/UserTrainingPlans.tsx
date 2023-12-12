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
                  <div className="flex flex-col gap-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde porro ipsa, quae praesentium dolore, tenetur optio
                    fugiat suscipit numquam recusandae adipisci, incidunt
                    deleniti reiciendis dolor sunt dolorem laudantium odit
                    temporibus!
                    {/* <div className="flex flex-col">
                      <b>Objetivo:</b> {training?.}
                    </div>
                    <div className="flex flex-col">
                      <b>Descrição:</b> {training?.description}
                    </div>
                    <div className="flex flex-col">
                      <b>Observações:</b> {training?.observations}
                    </div> */}
                  </div>
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
