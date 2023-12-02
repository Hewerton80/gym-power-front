"use client";
import { Button } from "@/components/ui/buttons/Button";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { useGetStudents } from "@/hooks/api/useStudent";
import { useGetUsers } from "@/hooks/api/useUser";
import { UserRole } from "@/types/User";
import { isUndefined } from "@/shared/isType";
import Link from "next/link";
import { useMemo } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { differenceInYears } from "date-fns";
export default function StudensPage() {
  const { students, isLoadingStudents, studentsError, refetchStudents } =
    useGetStudents();

  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { content: "Nome", field: "name" },
      { content: "Medidas", field: "measures" },
      { content: "Idade", field: "age" },
      { content: "Sexo", field: "gender" },
      { content: "Status", field: "active" },
      { content: "", field: "actions" },
    ],
    []
  );

  const rows = useMemo<IRowDataTable[]>(() => {
    if (!Array.isArray(students?.data)) {
      return [];
    }
    return (
      students?.data?.map((student, i) => ({
        value: String(i),
        contents: [
          <div key={`${i}-name`} className="flex flex-col">
            {student?.name}
            <span className="text-xs">{student?.email}</span>
          </div>,
          `${student?.heightInMt}m / ${student?.weightInKg}kg`,
          student?.dateOfBirth
            ? `${differenceInYears(
                new Date(),
                new Date(student?.dateOfBirth)
              )} anos`
            : "-",
          student?.gender,
          student?.isActive ? "Ativo" : "Inativo",
          <div className="flex" key={`${i}-action`}>
            {student?.id && (
              <IconButton
                className="ml-auto"
                key="0 - 1"
                asChild
                icon={
                  <Link
                    href={`/teacher/students/${student?.id}/training-plans`}
                  >
                    <AiOutlineEye />
                  </Link>
                }
              />
            )}
          </div>,
        ],
      })) || []
    );
  }, [students]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Alunos</Card.Title>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={cols}
          rows={rows}
          onTryAgainIfError={refetchStudents}
          isError={Boolean(studentsError)}
          isLoading={isLoadingStudents || isUndefined(students)}
        />
      </Card.Body>
    </Card>
  );
}
