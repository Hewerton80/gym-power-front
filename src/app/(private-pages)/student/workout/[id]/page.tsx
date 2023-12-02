import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { ExerciseCard } from "@/components/ui/cards/ExerciseCard";
import { getRange } from "@/shared/getRange";
import { BsFillPlayFill } from "react-icons/bs";

export default function TrainingPage() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>D - Ombro</Card.Title>
        <Card.Actions>
          <Button leftIcon={<BsFillPlayFill size={20} />}>Inciar treino</Button>
        </Card.Actions>
      </Card.Header>
      <Card.Body className="space-y-4">
        {getRange(8).map((i) => (
          <ExerciseCard key={i} />
        ))}
      </Card.Body>
    </Card>
  );
}
