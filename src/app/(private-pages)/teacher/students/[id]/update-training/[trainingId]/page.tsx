"use client";
import { TrainingForm } from "@/components/screens/TrainingForm";
import { useParams } from "next/navigation";

export default function CreateTrainingPage() {
  const { id, trainingId } = useParams<{ id: string; trainingId: string }>();
  return <TrainingForm studentId={id} trainingId={trainingId} />;
}
