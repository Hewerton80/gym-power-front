"use client";
import { TrainingPlanForm } from "@/components/screens/TrainingPlanForm";
import { useParams } from "next/navigation";

export default function CreateTrainingPlabePage() {
  const params = useParams<{ id: string }>();
  return <TrainingPlanForm studendId={params?.id} />;
}
