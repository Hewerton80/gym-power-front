import { FaHome, FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";

export enum BASE_PATHS {
  BASE_AUTH_PATH = "auth",
  BASE_ADMIN_PATH = "admin",
  BASE_STUDENT_PATH = "student",
  BASE_TEACHER_PATH = "teacher",
}

interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  layoutSegment: BASE_PATHS;
}

export const navItems: INavItem[] = [
  {
    title: "Home",
    path: "/app/student/home",
    layoutSegment: BASE_PATHS.BASE_STUDENT_PATH,
    icon: <FaHome />,
  },
  {
    title: "Usuários",
    path: "/app/admin/users",
    layoutSegment: BASE_PATHS.BASE_ADMIN_PATH,
    icon: <FaUsers />,
  },
  {
    title: "Treinos",
    path: "/app/teacher/workouts",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <FaDumbbell />,
  },
  {
    title: "Alunos",
    path: "/app/teacher/students",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <GiMuscleUp />,
  },
];
