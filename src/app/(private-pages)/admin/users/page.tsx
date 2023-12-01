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
import { UserRole } from "@/types/User";
import { getUserTextRoles } from "@/utils/getUserTextRoles";
import { isUndefined } from "@/utils/isType";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { MdEdit } from "react-icons/md";

export default function UsersPage() {
  const { users, isLoadingUsers, usersError, refetchUsers } = useGetUsers();

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

  const getTextRoles = useCallback(
    (index: number) => {
      const user = users?.[index];
      if (!user?.isAdmin && !user?.isTeacher) {
        return "-";
      }
      const roles = [];
      if (user?.isAdmin) {
        roles.push("Administrador");
      }
      if (user?.isTeacher) {
        roles.push("Professor");
      }
      return roles.join(", ");
    },
    [users]
  );

  const rows = useMemo<IRowDataTable[]>(
    () =>
      Array.isArray(users)
        ? users?.map((user, i) => ({
            value: String(i),
            contents: [
              user?.name,
              user?.email,
              getUserTextRoles(user),
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

  return (
    <Card>
      <Card.Header>
        <Card.Title>Usuários</Card.Title>
        <Card.Actions>
          <Button asChild>
            <Link href="/admin/users/create">Adicionar usuário</Link>
          </Button>
        </Card.Actions>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={cols}
          rows={rows}
          onTryAgainIfError={refetchUsers}
          isError={Boolean(usersError)}
          isLoading={isLoadingUsers || isUndefined(users)}
        />
      </Card.Body>
    </Card>
  );
}
