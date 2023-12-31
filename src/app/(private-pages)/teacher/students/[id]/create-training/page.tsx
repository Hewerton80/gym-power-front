"use client";
import { TrainingForm } from "@/components/screens/TrainingForm";
import { useParams } from "next/navigation";

export default function CreateTrainingPage() {
  const params = useParams<{ id: string }>();
  return <TrainingForm studentId={params?.id} />;
}
