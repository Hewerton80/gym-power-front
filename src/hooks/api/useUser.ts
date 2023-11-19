import { apiBase } from "@/lib/apiBase";
import { IUser } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export interface IUserForm extends IUser {
  confirmPassword?: string;
}

export function useGetUsers() {
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

export function useMutateUser() {
  const { mutate: createUser, isPending: isMutatingUser } = useMutation({
    mutationFn: (user: IUserForm) =>
      apiBase.post<IUser>("/users", user).then((res) => res.data),
  });

  const isSubmitingUser = useMemo(() => isMutatingUser, [isMutatingUser]);

  return { createUser, isSubmitingUser };
}
