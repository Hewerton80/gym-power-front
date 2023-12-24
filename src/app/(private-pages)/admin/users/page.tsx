"use client";
import { Button } from "@/components/ui/buttons/Button";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { useGetUsers } from "@/hooks/api/useUser";
import {
  IGetStudentsQueryParams,
  UserRole,
  UserRolesNamesType,
} from "@/types/User";
import { isUndefined } from "@/shared/isType";
import Link from "next/link";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { MdEdit } from "react-icons/md";
import { orderByUserOptions, usersRolesOptions } from "@/shared/pickerOptions";
import { useDebouncedCallback } from "use-debounce";
import { Picker } from "@/components/ui/forms/Picker";
import { genderOptions } from "@/shared/pickerOptions";
import { Input } from "@/components/ui/forms/Input";

export default function UsersPage() {
  const {
    users,
    isLoadingUsers,
    usersError,
    usersQueryParams,
    refetchUsers,
    goToPage,
  } = useGetUsers();

  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [isActiveFilter, setIsActiveFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [orderByFilter, setOrderByFilter] = useState(
    orderByUserOptions[0].value
  );

  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { content: "Nome", field: "name" },
      { content: "Email", field: "email" },
      { content: "Funções", field: "roles" },
      { content: "Status", field: "active" },
      { content: "", field: "actions" },
    ],
    []
  );

  const rows = useMemo<IRowDataTable[]>(
    () =>
      Array.isArray(users?.docs)
        ? users?.docs?.map((user, i) => ({
            value: String(i),
            contents: [
              user?.name,
              user?.email,
              user?.roles
                ?.map((role) => UserRole[role as UserRolesNamesType])
                ?.join(", "),
              user?.isActive ? "Ativo" : "Inativo",
              <div className="flex" key={`${i}-action`}>
                {user?.id && (
                  <IconButton
                    className="ml-auto"
                    key="0 - 1"
                    asChild
                    icon={
                      <Link href={`/admin/users/${user?.id}/edit`}>
                        <MdEdit />
                      </Link>
                    }
                  />
                )}
              </div>,
            ],
          }))
        : [],
    [users]
  );

  const handleChangeFilterDebounced = useDebouncedCallback(
    (newStudentsQueryParams: IGetStudentsQueryParams) => {
      refetchUsers({ ...usersQueryParams, ...newStudentsQueryParams });
      setIsSearching(false);
    },
    1000
  );

  const handleChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setIsSearching(true);
      setSearch(value);
      handleChangeFilterDebounced({ keyword: value });
    },
    [handleChangeFilterDebounced]
  );

  const handleChangeIsActiveFilter = useCallback(
    (value: string) => {
      setIsSearching(true);
      setIsActiveFilter(value);
      handleChangeFilterDebounced({ isActive: value });
    },
    [handleChangeFilterDebounced]
  );

  const handleChangeOrderByFilter = useCallback(
    (value: string) => {
      setIsSearching(true);
      setOrderByFilter(value);
      handleChangeFilterDebounced({ orderBy: value });
    },
    [handleChangeFilterDebounced]
  );
  const handleChangeRoleFilter = useCallback(
    (value: string) => {
      setIsSearching(true);
      setRoleFilter(value);
      const roleValue: UserRolesNamesType = value as UserRolesNamesType;
      handleChangeFilterDebounced({
        isTeacher: roleValue === "TEACHER" ? "true" : undefined,
        isAdmin: roleValue === "ADMIN" ? "true" : undefined,
      });
    },
    [handleChangeFilterDebounced]
  );

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Usuários</Card.Title>
        <Card.Actions>
          <Button asChild>
            <Link href="/admin/users/create">Adicionar usuário</Link>
          </Button>
        </Card.Actions>
      </Card.Header>
      <Card.Body>
        <div className="flex items-center flex-wrap gap-x-1 sm:gap-x-2">
          <Picker
            label="Status"
            value={isActiveFilter}
            onChange={handleChangeIsActiveFilter}
            hideInput
            options={[
              { label: "Ativo", value: "true" },
              { label: "Inativo", value: "false" },
            ]}
          />
          <Picker
            label="Função"
            value={roleFilter}
            onChange={handleChangeRoleFilter}
            hideInput
            options={usersRolesOptions}
          />
          <Picker
            label="Ordenar por"
            value={orderByFilter}
            onChange={handleChangeOrderByFilter}
            hideInput
            hideCloseButton
            options={orderByUserOptions}
          />
          <div className="ml-auto">
            <Input
              value={search}
              onChange={handleChangeSearch}
              placeholder="Pesquisar"
            />
          </div>
        </div>
        <DataTable
          columns={cols}
          rows={rows}
          onTryAgainIfError={refetchUsers}
          isError={Boolean(usersError)}
          isLoading={isLoadingUsers || isUndefined(users) || isSearching}
          paginationConfig={{
            currentPage: users?.currentPage || 1,
            totalPages: users?.lastPage || 1,
            perPage: users?.perPage || 25,
            totalRecords: users?.total || 1,
            onChangePage: goToPage,
          }}
        />
      </Card.Body>
    </Card.Root>
  );
}
