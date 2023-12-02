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
import { useEffect, useMemo } from "react";
import Link from "next/link";
import { statusTrainingBadge } from "@/shared/statusTrainingBadge";
import { useAuth } from "@/hooks/api/useAuth";
import { useGetMyTrainings } from "@/hooks/api/useTraining";
import { isUndefined } from "@/shared/isType";

export default function StudentPage() {
  const { loggedUser } = useAuth();
  const { trainings, isloadingTrainings, trainingsError, refetchTrainings } =
    useGetMyTrainings();

  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { field: "date", content: "Data" },
      { field: "training", content: "Treino" },
      { field: "time", content: "Duração" },
      { field: "status", content: "Starus" },
      { field: "actions", content: "" },
    ],
    []
  );

  const rows = useMemo<IRowDataTable[]>(
    () => [
      {
        value: "0",
        contents: [
          "seg, 01 Fev",
          "A - Peito, Tríceps, ombro",
          "2h 15m",
          statusTrainingBadge["incomplete"],
          <div key={`action-3`} className="flex justify-end">
            <IconButton
              key="0 - 3"
              icon={
                <Link href="#">
                  <AiOutlineEye />
                </Link>
              }
            />
          </div>,
          ,
        ],
      },
      {
        value: "1",
        contents: [
          "ter, 02 Mar",
          "B - Dorsal, Bíceps",
          "1h 0m",
          statusTrainingBadge["finished"],
          <div key={`action-3`} className="flex justify-end">
            <IconButton
              key="0 - 3"
              icon={
                <Link href="#">
                  <AiOutlineEye />
                </Link>
              }
            />
          </div>,
        ],
      },
      {
        value: "2",
        contents: [
          "Qui, 03 Abr",
          "C - Perna",
          "59m",
          statusTrainingBadge["inProgress"],
          <div key={`action-3`} className="flex justify-end">
            <IconButton
              key="0 - 3"
              icon={
                <Link href="#">
                  <AiOutlineEye />
                </Link>
              }
            />
          </div>,
        ],
      },
    ],
    []
  );

  useEffect(() => {
    console.log({ trainings });
  }, [trainings]);

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-7 col-span-12 lg:col-span-4">
        <WidgetCard
          title="Altura"
          description={`${loggedUser?.heightInMt}m`}
          icon={<VscSymbolRuler />}
        />
        <WidgetCard
          variant="info"
          title="Peso"
          description={`${loggedUser?.weightInKg}kg`}
          icon={<FaWeight />}
        />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Card className="h-full">
          <Card.Header>
            <Card.Title>Últimos treinos</Card.Title>
            <Card.Actions>
              <Button
                asChild={Boolean(trainings?.length)}
                disabled={!trainings?.length}
              >
                <Link href="#">Ver mais</Link>
              </Button>
            </Card.Actions>
          </Card.Header>
          <Card.Body>
            <DataTable
              columns={cols}
              rows={rows}
              onTryAgainIfError={refetchTrainings}
              isError={Boolean(trainingsError)}
              // isLoading={isloadingTrainings || isUndefined(trainings)}
              numSkeletonRows={3}
            />
          </Card.Body>
        </Card>
      </div>
      <div className="col-span-12">
        <WidgetCard
          className="col-span-3"
          variant="secondary"
          title={
            <div className="flex items-center justify-between w-full">
              <p className="text-sm">Treino de hoje</p>
              <Button asChild>
                <Link href="/student/training/qeor455">Ir até treino</Link>
              </Button>
            </div>
          }
          description="D - Ombro"
          icon={<LuDumbbell />}
        />
      </div>
    </div>
  );
}
