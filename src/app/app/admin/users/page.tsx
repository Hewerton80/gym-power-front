"use client";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { Card } from "@/components/ui/cards/Card";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { TableSkeleton } from "@/components/ui/feedback/TableSkeleton";
import { useGetUsers } from "@/hooks/useUser";
import { UserRole } from "@/types/User";
import { isUndefined } from "@/utils/isType";
import Link from "next/link";
import { useMemo } from "react";
import { MdEdit } from "react-icons/md";

export default function UsersPage() {
  const { users, isLoadingUsers, usersError, refetchUsers } = useGetUsers();

  const cols = useMemo<IColmunDataTable[]>(
    () => [
      { content: "Nome", field: "name" },
      { content: "Email", field: "email" },
      { content: "Funções", field: "roles" },
      { content: "", field: "actions" },
    ],
    []
  );

  const rows = useMemo<IRowDataTable[]>(
    () =>
      users?.map((user, i) => ({
        value: String(i),
        contents: [
          user?.name,
          user?.email,
          user?.userRoles?.map(({ role }) => UserRole[role])?.join(", "),
          <div className="flex" key={`${i}-action`}>
            <IconButton
              className="ml-auto"
              key="0 - 1"
              asChild
              icon={
                <Link href="#">
                  <MdEdit />
                </Link>
              }
            />
          </div>,
        ],
      })) || [],
    [users]
  );

  const handleTableContent = useMemo(() => {
    if (usersError) {
      return <FeedBackError onTryAgain={refetchUsers} />;
    }
    if (isLoadingUsers || isUndefined(users)) {
      return <TableSkeleton columns={cols} numRows={15} />;
    }
    return <DataTable columns={cols} rows={rows} />;
  }, [cols, users, isLoadingUsers, rows, usersError, refetchUsers]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Usuários</Card.Title>
      </Card.Header>
      <Card.Body>{handleTableContent}</Card.Body>
    </Card>
  );
}
