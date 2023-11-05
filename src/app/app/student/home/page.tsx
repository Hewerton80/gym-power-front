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

export default function StudentPage() {
  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { field: "date", content: "Data" },
      { field: "workout", content: "Treino" },
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
          "Completo",
          <IconButton
            key="0 - 1"
            asChild
            icon={
              <Link href="#">
                <AiOutlineEye />
              </Link>
            }
          />,
          ,
        ],
      },
      {
        value: "1",
        contents: [
          "ter, 02 Mar",
          "B - Dorsal, Bíceps",
          "1h 0m",
          "Imcompleto",
          <IconButton
            key="0 - 2"
            icon={
              <Link href="#">
                <AiOutlineEye />
              </Link>
            }
          />,
        ],
      },
      {
        value: "2",
        contents: [
          "Qui, 03 Abr",
          "C - Perna",
          "59m",
          "Completo",
          <IconButton
            key="0 - 3"
            icon={
              <Link href="#">
                <AiOutlineEye />
              </Link>
            }
          />,
        ],
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="grid grid-col-1 gap-7 col-span-12 lg:col-span-4">
        <WidgetCard
          className="col-span-3"
          title="Altura"
          description="1,80"
          icon={<VscSymbolRuler />}
        />
        <WidgetCard
          className="col-span-3"
          variant="info"
          title="Peso"
          description="75kg"
          icon={<FaWeight />}
        />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Card className="h-full">
          <Card.Header>
            <Card.Title>Últimos treinos</Card.Title>
            <Card.Actions>
              <Button asChild>
                <Link href="#">Ver mais</Link>
              </Button>
            </Card.Actions>
          </Card.Header>
          <Card.Body className="px-0 pb-0">
            <DataTable columns={cols} rows={rows} />
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
                <Link href="/app/student/workout/qeor455">Ir até treino</Link>
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
