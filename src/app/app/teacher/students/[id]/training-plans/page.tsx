"use client";
import { TrainingPlans } from "@/components/screens/TrainingPlans";
import { useParams } from "next/navigation";

export default function TrainingPlansPage() {
  const params = useParams<{ id: string }>();
  return <TrainingPlans studendId={params?.id} />;
}
