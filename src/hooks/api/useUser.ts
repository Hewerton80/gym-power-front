import { IGetStudentsQueryParams, UserWithComputedFields } from "@/types/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAxios } from "../utils/useAxios";
import { Gender } from "@prisma/client";
import { REGEX } from "@/shared/regex";
import { isValid as isValidDate } from "date-fns";
import { CONSTANTS } from "@/shared/constants";
import { z } from "zod";
import { IPaginatedDocs } from "@/lib/prismaHelpers";
import { orderByUserOptions } from "@/shared/pickerOptions";
import { useRouter, useSearchParams } from "next/navigation";
import { parseJsonToSearchParams } from "@/shared/parseJsonToSearchParams";
import { useDebouncedCallback } from "use-debounce";

const { VALIDATION_ERROR_MESSAGES } = CONSTANTS;

export const INITIAL_GET_USERS_QUERY_PARAMS: IGetStudentsQueryParams = {
  orderBy: orderByUserOptions[0].value,
};

const baseUserFormSchema = z.object({
  name: z.string().min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS),
  email: z.string().min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS),
  dateOfBirth: z
    .string()
    .min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS)
    .refine(
      (dateOfBirth) =>
        dateOfBirth.match(REGEX.isoDate) && isValidDate(new Date(dateOfBirth)),
      VALIDATION_ERROR_MESSAGES.INVALID_DATE
    )
    .transform((dateOfBirth) => `${dateOfBirth} 00:00:00`),
  genderOption: z.object({ label: z.string(), value: z.string() }).nullable(),
  id: z.string().optional(),
  isAdmin: z.boolean().optional(),
  isTeacher: z.boolean().optional(),
  currentPassword: z
    .string()
    .refine(
      (currentPassword) =>
        Boolean(String(currentPassword)?.trim())
          ? String(currentPassword)?.trim()?.length >= 6
          : true,

      VALIDATION_ERROR_MESSAGES.PASSWORD_MIN_LENGTH
    )
    .optional(),
  password: z
    .string()
    .refine(
      (password) =>
        Boolean(String(password)?.trim())
          ? String(password)?.trim()?.length >= 6
          : true,
      VALIDATION_ERROR_MESSAGES.PASSWORD_MIN_LENGTH
    )
    .optional(),
  confirmPassword: z
    .string()
    .refine(
      (confirmPassword) =>
        Boolean(String(confirmPassword)?.trim())
          ? String(confirmPassword)?.trim()?.length >= 6
          : true,
      VALIDATION_ERROR_MESSAGES.PASSWORD_MIN_LENGTH
    )
    .optional(),
  isEditUser: z.boolean().optional(),
});

export const createFormSchema = baseUserFormSchema
  .refine(({ password }) => Boolean(String(password)?.trim()), {
    message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
    path: ["password"],
  })
  .refine(({ confirmPassword }) => Boolean(String(confirmPassword)?.trim()), {
    message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
    path: ["confirmPassword"],
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: VALIDATION_ERROR_MESSAGES.PASSWORDS_NOT_MATCH,
    path: ["confirmPassword"],
  });

export const updateUserFormSchema = baseUserFormSchema;

export const updateMeFormSchema = baseUserFormSchema
  .merge(
    z.object({
      showEditPassord: z.boolean().optional(),
      heightInMt: z
        .number()
        .min(0.1, VALIDATION_ERROR_MESSAGES.MUST_BE_GREATER_THAN_ZERO),
      weightInKg: z
        .number()
        .min(0.1, VALIDATION_ERROR_MESSAGES.MUST_BE_GREATER_THAN_ZERO),
    })
  )
  .refine(
    ({ currentPassword, showEditPassord }) =>
      showEditPassord ? Boolean(String(currentPassword)?.trim()) : true,
    {
      message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
      path: ["currentPassword"],
    }
  )
  .refine(
    ({ password, showEditPassord }) =>
      showEditPassord ? Boolean(String(password)?.trim()) : true,
    {
      message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
      path: ["password"],
    }
  )
  .refine(
    ({ confirmPassword, showEditPassord }) =>
      showEditPassord ? Boolean(String(confirmPassword)?.trim()) : true,
    {
      message: VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS,
      path: ["confirmPassword"],
    }
  )
  .refine(
    ({ password, confirmPassword, showEditPassord }) =>
      showEditPassord ? password === confirmPassword : true,
    {
      message: VALIDATION_ERROR_MESSAGES.PASSWORDS_NOT_MATCH,
      path: ["confirmPassword"],
    }
  );

type InferBaseUserFormSchema = z.infer<typeof baseUserFormSchema>;
type InferUpdateUserFormSchema = z.infer<typeof updateUserFormSchema>;
type InferUpdateMeFormSchema = z.infer<typeof updateMeFormSchema>;

export type IUserForm = InferBaseUserFormSchema &
  InferUpdateUserFormSchema &
  InferUpdateMeFormSchema & {
    gender?: Gender;
  };

// export interface IUserForm extends z.infer<typeof baseUserFormSchema> {
//   gender?: Gender;

// }

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
  const router = useRouter();

  const searchParams = useSearchParams();

  const [usersQueryParams, setStudentsQueryParams] =
    useState<IGetStudentsQueryParams>({ orderBy: orderByUserOptions[0].value });

  const [usersQueryParamsDebounced, setStudentsQueryParamsDebounced] =
    useState<IGetStudentsQueryParams>({ orderBy: orderByUserOptions[0].value });

  const [isSearching, setIsSearching] = useState(false);

  const {
    data: users,
    isFetching,
    error: usersError,
    refetch,
  } = useQuery({
    queryFn: ({ queryKey }) =>
      apiBase
        .get<IPaginatedDocs<UserWithComputedFields>>("/users", {
          params: queryKey[0],
        })
        .then((res) => res.data || { docs: [] })
        .finally(() => setIsSearching(false)),
    queryKey: [usersQueryParamsDebounced],
    enabled: false,
    retry: 1,
  });

  const isLoadingUsers = useMemo(
    () => isFetching || isSearching,
    [isFetching, isSearching]
  );

  useEffect(() => {
    refetch();
    console.log("refetch");
  }, [usersQueryParamsDebounced, refetch]);

  const refetchUsersDebounced = useDebouncedCallback(
    (queryParams?: IGetStudentsQueryParams) => {
      const queryParamsTmp = queryParams
        ? { ...queryParams, currentPage: 1 }
        : { ...usersQueryParams };
      setStudentsQueryParamsDebounced(queryParamsTmp);
      router.push(parseJsonToSearchParams(queryParamsTmp));
    },
    1000
  );

  const changeUserFilter = useCallback(
    (newStudentsQueryParams: IGetStudentsQueryParams) => {
      setIsSearching(true);
      setStudentsQueryParams((prev) => ({
        ...prev,
        ...newStudentsQueryParams,
      }));
      refetchUsersDebounced(newStudentsQueryParams);
    },
    [refetchUsersDebounced]
  );

  const refetchUsers = useCallback(() => {
    setStudentsQueryParamsDebounced({ ...usersQueryParams });
  }, [usersQueryParams]);

  const goToPage = useCallback(
    (page: number) => {
      const newQueryParams = { ...usersQueryParams, currentPage: page };
      setStudentsQueryParamsDebounced(newQueryParams);
      setStudentsQueryParams(newQueryParams);
    },
    [usersQueryParams]
  );

  return {
    users,
    isLoadingUsers,
    usersError,
    usersQueryParams,
    refetchUsers,
    goToPage,
    changeUserFilter,
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
    useState<IGetStudentsQueryParams>({ orderBy: orderByUserOptions[0].value });

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
      if (!queryParams) {
        setStudentsQueryParams({ ...studentsQueryParams });
      } else {
        setStudentsQueryParams({ ...queryParams, currentPage: 1 });
      }
    },
    [studentsQueryParams]
  );

  const goToPage = useCallback((page: number) => {
    setStudentsQueryParams((prev) => ({ ...prev, currentPage: page }));
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

export function useMutateMe() {
  const { apiBase } = useAxios();

  const { mutate: updateMe, isPending: isSubmitingUserMe } = useMutation({
    mutationFn: (userFormData: IUserForm) =>
      apiBase
        .patch<UserWithComputedFields>(`/me/user`, userFormData)
        .then((res) => res.data),
  });

  return { updateMe, isSubmitingUserMe };
}
