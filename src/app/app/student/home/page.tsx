import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { DashboadCard } from "@/components/ui/cards/DashboadCard";
import { VscSymbolRuler } from "react-icons/vsc";
import { FaWeight } from "react-icons/fa";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { useMemo } from "react";
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
          "",
        ],
      },
      {
        value: "1",
        contents: [
          "ter, 02 Mar",
          "B - Dorsal, Bíceps",
          "1h 0m",
          "Imcompleto",
          "",
        ],
      },
      {
        value: "2",
        contents: ["Qui, 03 Abr", "C - Perna", "59m", "Completo", ""],
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="grid grid-col-1 gap-7 col-span-12 lg:col-span-4">
        <DashboadCard
          className="col-span-3"
          title="Altura"
          description="1,80"
          icon={<VscSymbolRuler />}
        />
        <DashboadCard
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
              <Button>Ver mais</Button>
            </Card.Actions>
          </Card.Header>
          <Card.Body className="px-0 pb-0">
            <DataTable columns={cols} rows={rows} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
