import { UserRole } from "@/types/User";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";

export enum BASE_PATHS {
  BASE_AUTH_PATH = "auth",
  BASE_ADMIN_PATH = "admin",
  BASE_STUDENT_PATH = "student",
  BASE_TEACHER_PATH = "teacher",
}

type AvaliablesRoles = {
  [key in keyof typeof UserRole]?: Boolean;
};

export interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  layoutSegment: BASE_PATHS;
  avaliablesRoles: AvaliablesRoles;
}

export const navItems: INavItem[] = [
  {
    title: "Home",
    path: "/app/student/home",
    layoutSegment: BASE_PATHS.BASE_STUDENT_PATH,
    icon: <FaHome />,
    avaliablesRoles: { STUDENT: true },
  },
  {
    title: "Usuários",
    path: "/app/admin/users",
    layoutSegment: BASE_PATHS.BASE_ADMIN_PATH,
    icon: <FaUsers />,
    avaliablesRoles: { ADMIN: true },
  },
  {
    title: "Treinos",
    path: "/app/teacher/workouts",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <FaDumbbell />,
    avaliablesRoles: { TEACHER: true },
  },
  {
    title: "Alunos",
    path: "/app/teacher/students",
    layoutSegment: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <GiMuscleUp />,
    avaliablesRoles: { TEACHER: true },
  },
];
