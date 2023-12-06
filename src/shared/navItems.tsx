import { User } from "@prisma/client";
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
  [key in keyof Pick<User, "isAdmin" | "isTeacher">]?: Boolean;
};

export interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  basePath: BASE_PATHS;
  avaliablesRoles?: AvaliablesRoles;
}

export const navItems: INavItem[] = [
  {
    title: "Usuários",
    path: `/${BASE_PATHS.BASE_ADMIN_PATH}/users`,
    basePath: BASE_PATHS.BASE_ADMIN_PATH,
    icon: <FaUsers />,
    avaliablesRoles: { isAdmin: true },
  },
  // {
  //   title: "Treinos",
  //   path: "/teacher/trainings",
  //   basePath: BASE_PATHS.BASE_TEACHER_PATH,
  //   icon: <FaDumbbell />,
  //   avaliablesRoles: { TEACHER: true },
  // },
  {
    title: "Alunos",
    path: `/${BASE_PATHS.BASE_TEACHER_PATH}/students`,
    basePath: BASE_PATHS.BASE_TEACHER_PATH,
    icon: <GiMuscleUp />,
    avaliablesRoles: { isTeacher: true },
  },
  {
    title: "Área do aluno",
    path: `/${BASE_PATHS.BASE_STUDENT_PATH}/home`,
    basePath: BASE_PATHS.BASE_STUDENT_PATH,
    icon: <FaHome />,
  },
];
