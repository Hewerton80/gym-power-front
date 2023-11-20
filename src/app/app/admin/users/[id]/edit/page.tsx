"use client";
import { UserForm } from "@/app/app/admin/users/UserForm";
import { useParams } from "next/navigation";

export default function EditUsersPage() {
  const params = useParams();
  return <UserForm userId={String(params?.id)} />;
}
