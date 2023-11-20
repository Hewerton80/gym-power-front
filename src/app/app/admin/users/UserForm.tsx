"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";
import { IUserForm, useGetUser, useMutateUser } from "@/hooks/api/useUser";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { z } from "zod";
import { CONSTANTS } from "@/utils/constants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useRouter } from "next/navigation";
import { Select } from "@/components/ui/forms/Select";
import { usersRolesOptions } from "@/utils/userRolesOptions";
import { UserRole, UserRolesNamesType } from "@/types/User";
import { AxiosError } from "axios";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { isUndefined } from "@/utils/isType";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";

const { ERROR_MESSAGES } = CONSTANTS;

const userFormSchema = z
  .object<ToZodObjectSchema<IUserForm>>({
    name: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    email: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    userRolesOptions: z.array(z.any()).min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    password: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    confirmPassword: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

interface IUserFormProps {
  userId?: string;
}

export function UserForm({ userId }: IUserFormProps) {
  const router = useRouter();
  const { showAlert } = useAlertModal();

  const { createUser, isSubmitingUser } = useMutateUser();
  const {
    isLoadingUser,
    userError,
    refetchUser,
    user: currentFormUserData,
  } = useGetUser(userId);

  const isEditUser = useMemo(() => Boolean(userId), [userId]);
  const isLoadingForm = useMemo(
    () => isEditUser && isLoadingUser,
    [isEditUser, isLoadingUser]
  );

  const { control, formState, reset, setError, handleSubmit } =
    useForm<IUserForm>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        userRolesOptions: [],
      },
      mode: "onTouched",
      resolver: zodResolver(userFormSchema),
    });

  useEffect(() => {
    if (isEditUser && currentFormUserData) {
      reset({
        name: currentFormUserData?.name,
        email: currentFormUserData?.email,
        userRolesOptions: currentFormUserData?.userRoles?.map(({ role }) => ({
          label: UserRole[role as UserRolesNamesType],
          value: role,
        })),
      });
    }
  }, [isEditUser, currentFormUserData, reset]);

  const handleUserDataForm = useCallback(({ ...userDataForm }: IUserForm) => {
    userDataForm.roles = userDataForm?.userRolesOptions?.map(
      (role) => role.value
    ) as UserRolesNamesType[];
    delete userDataForm?.confirmPassword;
    delete userDataForm?.userRolesOptions;
    return userDataForm;
  }, []);

  const handleSubmitUser = useCallback(
    (userDataForm: IUserForm) => {
      const onSuccess = () => {
        toast("Usuário criado com sucesso!");
        router.push("/app/admin/users");
      };
      const onError = (error: any) => {
        console.log({ error });
        if (error?.response?.status === 409) {
          setError("email", { message: "Email já cadastrado" });
        } else {
          showAlert({
            title: "Erro ao criar usuário",
            description: error?.message,
            variant: "danger",
          });
        }
      };
      createUser(handleUserDataForm(userDataForm), { onSuccess, onError });
    },
    [router, createUser, showAlert, handleUserDataForm, setError]
  );

  const handleFormContent = useMemo(() => {
    if (isEditUser) {
      if (userError) {
        return <FeedBackError onTryAgain={refetchUser} />;
      }
      if (isLoadingForm || isUndefined(currentFormUserData)) {
        return <FeedBackLoading />;
      }
    }
    return (
      <form
        onSubmit={handleSubmit(handleSubmitUser)}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Nome"
                placeholder="Gymbson da Silva"
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Email"
                placeholder="Gym@email.com"
                type="email"
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userRolesOptions"
            control={control}
            render={({ field: { onChange, ...restField }, fieldState }) => (
              <Select
                isAutocomplite
                isMulti
                onchangeMultValue={onChange}
                label="Email"
                placeholder="Funções..."
                options={usersRolesOptions}
                error={fieldState?.error?.message}
                // error={"nome inválido"}
                {...restField}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Senha"
                placeholder="********"
                type="password"
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Confirmar senha"
                placeholder="********"
                type="password"
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
        </div>
        <Button
          type="submit"
          className="ml-auto"
          disabled={!formState.isDirty}
          isLoading={isSubmitingUser}
        >
          {isEditUser ? "Editar" : "Criar"}
        </Button>
      </form>
    );
  }, [
    control,
    userError,
    formState.isDirty,
    currentFormUserData,
    isLoadingForm,
    isEditUser,
    isSubmitingUser,
    handleSubmit,
    handleSubmitUser,
    refetchUser,
  ]);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{isEditUser ? "Editar" : "Criar"} Usuário</Card.Title>
      </Card.Header>
      <Card.Body>{handleFormContent}</Card.Body>
    </Card>
  );
}
