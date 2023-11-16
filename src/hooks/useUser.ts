import { apiBase } from "@/lib/apiBase";
import { IUser } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

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
