import { UserWithComputedFields } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { Prisma } from "@prisma/client";
import { SingleValue } from "react-select";
import { SelectOption } from "@/components/ui/forms/Select";

export interface IUserForm extends Prisma.UserCreateInput {
  isEditUser?: boolean;
  confirmPassword?: string;
  genderOption?: SingleValue<SelectOption> | null;
}

export function useGetMe() {
  const { apiBase } = useAxios();

  const {
    data: me,
    isFetching: isLoadingMe,
    error: meError,
  } = useQuery({
    queryFn: () =>
      apiBase.get<UserWithComputedFields>("/me/user").then((res) => res.data),
    queryKey: [{ me: "todo" }],
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { me, isLoadingMe, meError };
}

export function useGetUsers() {
  const { apiBase } = useAxios();

  const {
    data: users,
    isFetching: isLoadingUsers,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery({
    queryFn: () =>
      apiBase
        .get<UserWithComputedFields[]>("/users")
        .then((res) => res.data || []),
    queryKey: [],
    retry: 1,
  });

  return {
    users,
    isLoadingUsers,
    usersError,
    refetchUsers,
  };
}

export function useGetUser(userId?: string) {
  const { apiBase } = useAxios();

  const {
    data: user,
    isFetching: isLoadingUser,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryFn: () =>
      apiBase
        .get<UserWithComputedFields>(`/users/${userId}`)
        .then((res) => res.data),
    queryKey: [],
    enabled: Boolean(userId),
    retry: 1,
  });

  return {
    user,
    isLoadingUser,
    userError,
    refetchUser,
  };
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
      apiBase
        .get<UserWithComputedFields[]>("/students")
        .then((res) => res.data || []),
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
      apiBase
        .get<UserWithComputedFields>(`/students/${studentId}`)
        .then((res) => res.data),
    queryKey: [],
    enabled: Boolean(studentId),
    retry: 1,
  });

  const personalInfosList = useMemo(() => {
    if (!student) {
      return [];
    }
    return [
      {
        label: "Altura",
        value: `${student?.heightInMt ? `${student?.heightInMt}M` : "-"}`,
      },
      {
        label: "Peso",
        value: `${student?.weightInKg ? `${student?.weightInKg}kg` : "-"}`,
      },
      {
        label: "Sexo",
        value: student?.gender,
      },
      {
        label: "Idade",
        value: `${student?.age ? `${student?.age} anos` : "-"}`,
      },
    ];
  }, [student]);

  return {
    student,
    isLoadingStudent,
    studentError,
    refetchStudent,
    personalInfosList,
  };
}

export function useMutateUser() {
  const { apiBase } = useAxios();

  const { mutate: createUser, isPending: isCreatingUser } = useMutation({
    mutationFn: (user: IUserForm) =>
      apiBase
        .post<UserWithComputedFields>("/users", user)
        .then((res) => res.data),
  });
  const { mutate: updateUser, isPending: isUpdataTingUser } = useMutation({
    mutationFn: ({ id, ...user }: IUserForm) =>
      apiBase
        .patch<UserWithComputedFields>(`/users/${id}`, user)
        .then((res) => res.data),
  });

  const isSubmitingUser = useMemo(
    () => isCreatingUser || isUpdataTingUser,
    [isCreatingUser, isUpdataTingUser]
  );

  return { createUser, updateUser, isSubmitingUser };
}
