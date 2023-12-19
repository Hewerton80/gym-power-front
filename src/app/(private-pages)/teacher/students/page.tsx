"use client";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { Input } from "@/components/ui/forms/Input";
import { useGetStudents } from "@/hooks/api/useUser";
import { isUndefined } from "@/shared/isType";
import Link from "next/link";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDebouncedCallback } from "use-debounce";

export default function StudensPage() {
  const {
    students,
    isLoadingStudents,
    studentsError,
    studentsQueryParams,
    refetchStudents,
    goToPage,
  } = useGetStudents();

  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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
    if (!Array.isArray(students?.docs)) {
      return [];
    }
    return (
      students?.docs?.map((student, i) => ({
        value: String(i),
        contents: [
          <div key={`${i}-name`} className="flex flex-col">
            {student?.name}
            <span className="text-xs">{student?.email}</span>
          </div>,
          `${student?.heightInMt}m / ${student?.weightInKg}kg`,
          student?.age ? `${student?.age} anos` : "-",
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

  const handleChangeSearchDebounced = useDebouncedCallback((value: string) => {
    refetchStudents({ ...studentsQueryParams, keyword: value });
    setIsSearching(false);
  }, 1000);

  const handleChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      setIsSearching(true);
      handleChangeSearchDebounced(value);
    },
    [handleChangeSearchDebounced]
  );

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Alunos</Card.Title>
        <Card.Actions>
          <Input
            value={search}
            onChange={handleChangeSearch}
            placeholder="Pesquisar"
          />
        </Card.Actions>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={cols}
          rows={rows}
          onTryAgainIfError={() => refetchStudents(studentsQueryParams)}
          isError={Boolean(studentsError)}
          isLoading={isLoadingStudents || isUndefined(students) || isSearching}
          paginationConfig={{
            currentPage: students?.currentPage || 1,
            totalPages: students?.lastPage || 1,
            perPage: students?.perPage || 25,
            totalRecords: 1,
            onChangePage: goToPage,
          }}
        />
      </Card.Body>
    </Card.Root>
  );
}
