import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";

export enum BASE_PATHS {
  BASE_AUTH_PATH = "auth",
  BASE_ADMIN_PATH = "app/admin",
  BASE_STUDENT_PATH = "app/student",
  BASE_TEACHER_PATH = "app/teacher",
}

interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  layoutSegment: BASE_PATHS;
}

export const navItems: INavItem[] = [
  {
    title: "Usuários",
    path: "app/admin/users",
    layoutSegment: BASE_PATHS.BASE_ADMIN_PATH,
    icon: <FaUsers />,
  },
  {
    title: "Exercícios",
    path: "app/teacher/exercises",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <FaDumbbell />,
  },
  {
    title: "Treinos",
    path: "app/teacher/workouts",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <GiMuscleUp />,
  },
];
