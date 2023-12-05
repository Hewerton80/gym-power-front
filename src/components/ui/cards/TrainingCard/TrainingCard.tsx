import { TrainingWithComputedFields } from "@/types/Training";
import { Button } from "../../buttons/Button";
import { Badge } from "../../dataDisplay/Badge";

interface TrainingCardProps {
  training?: TrainingWithComputedFields;
}

export function TrainingCard({ training }: TrainingCardProps) {
  return (
    <div
      className={
        "flex items-center justify-between p-4 border-b-border border-b rounded-[1.25rem]"
      }
    >
      <div className="flex gap-4">
        <div
          className={
            "flex justify-center items-center w-16 h-16 bg-primary/20 rounded-[0.625rem]"
          }
        >
          <strong className="text-primary text-lg">
            {training?.title?.split(" - ")?.[0]}
          </strong>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-medium text-heading dark:text-light">
            {training?.title?.split(" - ")?.[1]}
          </h4>
          {training?.isRecommendedToDay && (
            <Badge variant="primary">Recomendado</Badge>
          )}
        </div>
      </div>
      <div className="flex ml">
        <Button>Iniciar treino</Button>
      </div>
    </div>
  );
}
