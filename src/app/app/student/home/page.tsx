import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";

export default function StudentPage() {
  return (
    <Card>
      <Card.Header>
        <Card.Title> Página do estudante</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>lorem lorem lomre lorem</p>
      </Card.Body>
      <Card.Footer>
        <Button>Info</Button>
      </Card.Footer>
    </Card>
  );
}
