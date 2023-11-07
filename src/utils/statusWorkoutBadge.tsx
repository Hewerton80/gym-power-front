import { Badge } from "@/components/ui/dataDisplay/Badge";
import { WorkoutStatus } from "@/types/Workout";

type BadgeVariatnsType = {
  [key in keyof typeof WorkoutStatus]: JSX.Element;
};

export const statusWorkoutBadge: BadgeVariatnsType = {
  inProgress: <Badge variant="primary">{WorkoutStatus.inProgress}</Badge>,
  finished: <Badge variant="success">{WorkoutStatus.finished}</Badge>,
  incomplete: <Badge variant="warning">{WorkoutStatus.incomplete}</Badge>,
};
