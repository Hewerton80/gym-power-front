import { SelectOption } from "@/components/ui/forms/Select";
import { IUser } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";

export interface IUserForm extends IUser {
  isEditUser?: boolean;
  confirmPassword?: string;
  userRolesOptions?: SelectOption[] | null;
}

export function useGetUsers() {
  const { apiBase } = useAxios();

  const {
    data: users,
    isPending: isLoadingUsers,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery({
    queryFn: () => apiBase.get<IUser[]>("/users").then((res) => res.data || []),
    queryKey: [],
    initialData: undefined,
    retry: 4,
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
    isLoading: isLoadingUser,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryFn: () =>
      apiBase.get<IUser>(`/users/${userId}`).then((res) => res.data),
    queryKey: ["user", userId],
    enabled: Boolean(userId),
    initialData: undefined,
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
      apiBase.post<IUser>("/users", user).then((res) => res.data),
  });
  const { mutate: updateUser, isPending: isUpdataTingUser } = useMutation({
    mutationFn: ({ id, ...user }: IUserForm) =>
      apiBase.patch<IUser>(`/users/${id}`, user).then((res) => res.data),
  });

  const isSubmitingUser = useMemo(
    () => isCreatingUser || isUpdataTingUser,
    [isCreatingUser, isUpdataTingUser]
  );

  return { createUser, updateUser, isSubmitingUser };
}
