"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { ExerciseCard } from "@/components/ui/cards/ExerciseCard";
import { useAuth } from "@/hooks/api/useAuth";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { BsFillPlayFill } from "react-icons/bs";

export default function TrainingPage() {
  const params = useParams<{ id: string }>();
  const { loggedUser } = useAuth();

  const traning = useMemo(() => {
    return loggedUser?.trainingPlan?.trainings?.find((t) => t.id === params.id);
  }, [loggedUser, params]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{traning?.title}</Card.Title>
        <Card.Actions>
          <Button variantStyle="info" leftIcon={<BsFillPlayFill size={20} />}>
            Iniciar treino
          </Button>
        </Card.Actions>
      </Card.Header>
      <Card.Body className="space-y-4">
        {traning?.exercises?.map((exercise) => (
          <ExerciseCard key={exercise?.id} exercise={exercise} />
        ))}
      </Card.Body>
    </Card>
  );
}
