"use client";
import { Button } from "@/components/ui/buttons/Button";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import { WidgetCard } from "@/components/ui/cards/WidgetCard";
import { VscSymbolRuler } from "react-icons/vsc";
import { FaWeight } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { LuDumbbell } from "react-icons/lu";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { useMemo } from "react";
import Link from "next/link";
import { statusTrainingBadge } from "@/shared/statusTrainingBadge";
import { useAuth } from "@/hooks/api/useAuth";
import { useGetMyTrainings } from "@/hooks/api/useTraining";
import { TrainingCard } from "@/components/ui/cards/TrainingCard";
import { isUndefined } from "@/shared/isType";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";

export default function StudentPage() {
  const { loggedUser } = useAuth();
  const { trainings, isloadingTrainings, trainingsError, refetchTrainings } =
    useGetMyTrainings();

  // const cols = useMemo<IColmunDataTable[]>(
  //   () => [
  //     { field: "date", content: "Data" },
  //     { field: "training", content: "Treino" },
  //     { field: "time", content: "Duração" },
  //     { field: "status", content: "Starus" },
  //     { field: "actions", content: "" },
  //   ],
  //   []
  // );

  // const rows = useMemo<IRowDataTable[]>(
  //   () => [
  //     {
  //       value: "0",
  //       contents: [
  //         "seg, 01 Fev",
  //         "A - Peito, Tríceps, ombro",
  //         "2h 15m",
  //         statusTrainingBadge["incomplete"],
  //         <div key={`action-3`} className="flex justify-end">
  //           <IconButton
  //             key="0 - 3"
  //             icon={
  //               <Link href="#">
  //                 <AiOutlineEye />
  //               </Link>
  //             }
  //           />
  //         </div>,
  //         ,
  //       ],
  //     },
  //     {
  //       value: "1",
  //       contents: [
  //         "ter, 02 Mar",
  //         "B - Dorsal, Bíceps",
  //         "1h 0m",
  //         statusTrainingBadge["finished"],
  //         <div key={`action-3`} className="flex justify-end">
  //           <IconButton
  //             key="0 - 3"
  //             icon={
  //               <Link href="#">
  //                 <AiOutlineEye />
  //               </Link>
  //             }
  //           />
  //         </div>,
  //       ],
  //     },
  //     {
  //       value: "2",
  //       contents: [
  //         "Qui, 03 Abr",
  //         "C - Perna",
  //         "59m",
  //         statusTrainingBadge["inProgress"],
  //         <div key={`action-3`} className="flex justify-end">
  //           <IconButton
  //             key="0 - 3"
  //             icon={
  //               <Link href="#">
  //                 <AiOutlineEye />
  //               </Link>
  //             }
  //           />
  //         </div>,
  //       ],
  //     },
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   console.log({ trainings });
  // }, [trainings]);

  const handleTrainingsContent = useMemo(() => {
    if (trainingsError) {
      return <FeedBackError onTryAgain={refetchTrainings} />;
    }
    if (isloadingTrainings || isUndefined(trainings)) {
      return <FeedBackLoading />;
    }
    const hasSomeTrainingInProgress = trainings?.some(
      (training) => training?.isInProgress
    );
    return trainings?.map((training) => (
      <TrainingCard
        hideStartTrainingButton={hasSomeTrainingInProgress}
        key={training?.id}
        training={training}
      />
    ));
  }, [trainings, isloadingTrainings, trainingsError, refetchTrainings]);

  return (
    <div className="grid grid-cols-12 gap-7">
      <WidgetCard
        className="col-span-6"
        title="Altura"
        description={`${loggedUser?.heightInMt}m`}
        icon={<VscSymbolRuler />}
      />
      <WidgetCard
        className="col-span-6"
        variant="info"
        title="Peso"
        description={`${loggedUser?.weightInKg}kg`}
        icon={<FaWeight />}
      />
      <Card className="col-span-12">
        <Card.Header>
          <Card.Title>Meus treinos</Card.Title>
        </Card.Header>
        <Card.Body className="flex-col space-y-2">
          {handleTrainingsContent}
        </Card.Body>
      </Card.Root>
      {/* <div className="col-span-12 2xl:col-span-6">
        {recommendedTraingToDay && (
          <WidgetCard
            className="col-span-3"
            variant="secondary"
            title={
              <div className="flex items-center justify-between w-full">
                <p className="text-sm">Treino de hoje</p>
                <Button asChild>
                  <Link
                    href={`/student/training/${recommendedTraingToDay?.id}`}
                  >
                    Ir até treino
                  </Link>
                </Button>
              </div>
            }
            description={String(recommendedTraingToDay?.title)}
            icon={<LuDumbbell />}
          />
        )}
      </div> */}
      {/* <div className="col-span-12">
        <Card className="h-full">
          <Card.Header>
            <Card.Title>Últimos treinos</Card.Title>
            <Card.Actions>
              <Button
                asChild
                // disabled={!trainings?.length}
                disabled
              >
                <Link href="#">Ver mais</Link>
              </Button>
            </Card.Actions>
          </Card.Header>
          <Card.Body>
            <DataTable
              columns={cols}
              rows={rows}
              // onTryAgainIfError={refetchTrainings}
              // isError={Boolean(trainingsError)}
              // isLoading={isloadingTrainings || isUndefined(trainings)}
              numSkeletonRows={3}
            />
          </Card.Body>
        </Card.Root>
      </div> */}
    </div>
  );
}
