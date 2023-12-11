import { IGetUsers, UserWithComputedFields } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";
import { SingleValue } from "@/components/ui/forms/Select";
import { Prisma } from "@/prisma/generated/client";
import { SingleValue } from "react-select";

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
    queryKey: [],
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return {
    me,
    isLoadingMe,
    meError,
  };
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
      apiBase.get<IGetUsers[]>("/users").then((res) => res.data || []),
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
