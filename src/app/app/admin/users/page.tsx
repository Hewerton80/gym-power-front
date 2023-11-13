import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { UserRole } from "@/types/User";
import { getRange } from "@/utils/getRange";
import Link from "next/link";
import { useMemo } from "react";
import { AiOutlineEye } from "react-icons/ai";

export default function UsersPage() {
  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { content: "Nome", field: "name" },
      { content: "Peso", field: "weightInKg" },
      { content: "Altura", field: "heightInMt" },
      { content: "Data de nascimento", field: "dateOfBirth" },
      { content: "Funções", field: "roles" },
      { content: "", field: "actions" },
    ],
    []
  );

  const rows = useMemo<IRowDataTable[]>(
    () =>
      getRange(10).map((i) => ({
        value: String(i),
        contents: [
          <div key={`${i}-name`} className="flex flex-col">
            <span> Fulano da Silva</span>
            <span className="text-xs text-body-text"> fulano@email.com</span>
          </div>,
          "75kg",
          "1.82m",
          "20/12/1993",
          [UserRole.STUDENT, UserRole.TEACHER].join(", "),
          <div className="flex" key={`${i}-action`}>
            <IconButton
              className="ml-auto"
              key="0 - 1"
              asChild
              icon={
                <Link href="#">
                  <AiOutlineEye />
                </Link>
              }
            />
            ,
          </div>,
        ],
      })),
    []
  );

  return (
    <Card>
      <Card.Header>
        <Card.Title>Usuários</Card.Title>
      </Card.Header>
      <Card.Body>
        <DataTable rows={rows} columns={cols} />
      </Card.Body>
    </Card>
  );
}
