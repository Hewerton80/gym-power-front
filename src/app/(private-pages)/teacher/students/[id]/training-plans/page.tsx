"use client";
import { UserTrainingPlans } from "@/components/screens/UserTrainingPlans";
import { useParams } from "next/navigation";

export default function UserTrainingPlansPage() {
  const params = useParams<{ id: string }>();
  return <UserTrainingPlans studendId={params?.id} />;
}
