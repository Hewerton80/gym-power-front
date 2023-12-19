import { IGetStudentsQueryParams, UserWithComputedFields } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { useAxios } from "../utils/useAxios";
import { Prisma } from "@prisma/client";
import { SingleValue } from "react-select";
import { SelectOption } from "@/components/ui/forms/Select";
import { REGEX } from "@/shared/regex";
import { isValid as isValidDate } from "date-fns";
const { VALIDATION_ERROR_MESSAGES } = CONSTANTS;
import { CONSTANTS } from "@/shared/constants";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { z } from "zod";
import { IPaginatedDocs } from "@/shared/prismaPagination";
export interface IUserForm extends Prisma.UserCreateInput {
  isEditUser?: boolean;
  confirmPassword?: string;
  genderOption?: SingleValue<SelectOption> | null;
}

export const userFormSchema = z
  .object<ToZodObjectSchema<IUserForm>>({
    id: z.string().optional(),
    name: z.string().min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS),
    email: z.string().optional(),
    dateOfBirth: z
      .string()
      .min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS)
      .refine(
        (dateOfBirth) =>
          dateOfBirth.match(REGEX.isoDate) &&
          isValidDate(new Date(dateOfBirth)),
        VALIDATION_ERROR_MESSAGES.INVALID_DATE
      ),
    genderOption: z
      .object<ToZodObjectSchema<SelectOption>>({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),

    isAdmin: z.boolean().optional(),
    isTeacher: z.boolean().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    isEditUser: z.boolean().optional(),
  })
  .refine(
    ({ email, isEditUser }) =>
      isEditUser ? true : Boolean(String(email)?.trim()),
    { message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS, path: ["email"] }
  )
  .refine(
    ({ password, isEditUser }) =>
      isEditUser ? true : Boolean(String(password)?.trim()),
    { message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS, path: ["password"] }
  )
  .refine(
    ({ confirmPassword, isEditUser }) =>
      isEditUser ? true : Boolean(String(confirmPassword)?.trim()),
    {
      message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
      path: ["confirmPassword"],
    }
  )
  .refine(
    ({ password, confirmPassword, isEditUser }) =>
      isEditUser ? true : password === confirmPassword,
    { message: "As senhas não coincidem", path: ["confirmPassword"] }
  );

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
  const [studentsQueryParams, setStudentsQueryParams] =
    useState<IGetStudentsQueryParams>({});

  const {
    data: students,
    isFetching: isLoadingStudents,
    error: studentsError,
    refetch,
  } = useQuery({
    queryFn: ({ queryKey }) =>
      apiBase
        .get<IPaginatedDocs<UserWithComputedFields>>("/students", {
          params: queryKey[0],
        })
        .then((res) => res.data || { docs: [] }),
    queryKey: [studentsQueryParams],
    retry: 1,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [studentsQueryParams, refetch]);

  const refetchStudents = useCallback(
    (queryParams?: IGetStudentsQueryParams) => {
      setStudentsQueryParams({ ...(queryParams || {}) });
    },
    []
  );

  const goToPage = useCallback((page: number) => {
    setStudentsQueryParams((prev) => ({
      ...prev,
      currentPage: page,
    }));
  }, []);

  return {
    students,
    isLoadingStudents,
    studentsError,
    studentsQueryParams,
    refetchStudents,
    goToPage,
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
