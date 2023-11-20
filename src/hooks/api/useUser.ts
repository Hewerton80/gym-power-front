import { SelectOption } from "@/components/ui/forms/Select";
import { IUser } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAxios } from "../utils/useAxios";

export interface IUserForm extends IUser {
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
    isPending: isLoadingUser,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryFn: () =>
      apiBase.get<IUser>(`/users/${userId}`).then((res) => res.data),
    queryKey: ["user", userId],
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

  const { mutate: createUser, isPending: isMutatingUser } = useMutation({
    mutationFn: (user: IUserForm) =>
      apiBase.post<IUser>("/users", user).then((res) => res.data),
  });

  const isSubmitingUser = useMemo(() => isMutatingUser, [isMutatingUser]);

  return { createUser, isSubmitingUser };
}
