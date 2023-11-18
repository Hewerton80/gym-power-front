import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";

export function UserForm() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Criar Usuário</Card.Title>
      </Card.Header>
      <Card.Body>
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Input label="Nome" />
            <Input label="Email" />
            <Input label="Senha" />
          </div>
          <Button className="ml-auto">Criar</Button>
        </form>
      </Card.Body>
    </Card>
  );
}
