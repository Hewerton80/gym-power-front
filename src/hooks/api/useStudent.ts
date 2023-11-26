import { SelectOption } from "@/components/ui/forms/Select";
import { IUser } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { IPagined } from "@/types/Pagined";

export interface IUserForm extends IUser {
  isEditUser?: boolean;
  confirmPassword?: string;
  studentRolesOptions?: SelectOption[] | null;
}

export function useGetStudents() {
  const { apiBase } = useAxios();

  const {
    data: students,
    isFetching: isLoadingStudents,
    error: studentsError,
    refetch: refetchStudents,
  } = useQuery({
    queryFn: () =>
      apiBase.get<IPagined<IUser>>("/students").then((res) => res.data),
    queryKey: [],
    retry: 1,
  });

  return {
    students,
    isLoadingStudents,
    studentsError,
    refetchStudents,
  };
}

export function useGetStudent(studentId?: string) {
  const { apiBase } = useAxios();

  const {
    data: student,
    isFetching: isLoadingStudent,
    error: studentError,
    refetch: refetchStudent,
  } = useQuery({
    queryFn: () =>
      apiBase.get<IUser>(`/students/${studentId}`).then((res) => res.data),
    queryKey: [],
    enabled: Boolean(studentId),
    retry: 1,
  });

  return {
    student,
    isLoadingStudent,
    studentError,
    refetchStudent,
  };
}

// export function useMutateUser() {
//   const { apiBase } = useAxios();

//   const { mutate: createUser, isPending: isCreatingUser } = useMutation({
//     mutationFn: (student: IUserForm) =>
//       apiBase.post<IUser>("/students", student).then((res) => res.data),
//   });
//   const { mutate: updateUser, isPending: isUpdataTingUser } = useMutation({
//     mutationFn: ({ id, ...student }: IUserForm) =>
//       apiBase.patch<IUser>(`/students/${id}`, student).then((res) => res.data),
//   });

//   const isSubmitingUser = useMemo(
//     () => isCreatingUser || isUpdataTingUser,
//     [isCreatingUser, isUpdataTingUser]
//   );

//   return { createUser, updateUser, isSubmitingUser };
// }
