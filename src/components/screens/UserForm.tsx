"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";
import { IUserForm, useGetUser, useMutateUser } from "@/hooks/api/useUser";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { z } from "zod";
import { CONSTANTS } from "@/shared/constants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useRouter } from "next/navigation";
// import { Select } from "@/components/ui/forms/Select";
// import { usersRolesOptions } from "@/shared/userRolesOptions";
// import { UserRole, UserRolesNamesType } from "@/types/User";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { isUndefined } from "@/shared/isType";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { Checkbox } from "@/components/ui/forms/Checkbox";
import { REGEX } from "@/shared/regex";
import { Select, SelectOption } from "@/components/ui/forms/Select";
import { Gender } from "@prisma/client";
import { genderOptions } from "@/shared/genderOptions";

const { VALIDATION_ERROR_MESSAGES } = CONSTANTS;

const userFormSchema = z
  .object<ToZodObjectSchema<IUserForm>>({
    id: z.string().optional(),
    name: z.string().min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS),
    email: z.string().optional(),
    dateOfBirth: z
      .string()
      .min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS)
      .refine(
        (dateOfBirth) => dateOfBirth.match(REGEX.isoDate),
        VALIDATION_ERROR_MESSAGES.INVALID_DATE
      ),
    genderOption: z
      .array(
        z.object<ToZodObjectSchema<SelectOption>>({
          label: z.string(),
          value: z.string(),
        })
      )
      .min(1, VALIDATION_ERROR_MESSAGES.REQUIRED_FIELDS),
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

interface IUserFormProps {
  userId?: string;
}

export function UserForm({ userId }: IUserFormProps) {
  const router = useRouter();
  const { showAlert } = useAlertModal();

  const { createUser, updateUser, isSubmitingUser } = useMutateUser();
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
        id: "",
        name: "",
        email: "",
        dateOfBirth: "",
        genderOption: [],
        password: "",
        confirmPassword: "",
        isAdmin: false,
        isTeacher: false,
        isEditUser: false,
      },
      mode: "onTouched",
      resolver: zodResolver(userFormSchema),
    });

  useEffect(() => {
    if (isEditUser && currentFormUserData) {
      reset({
        id: currentFormUserData?.id,
        name: currentFormUserData?.name,
        email: currentFormUserData?.email,
        isAdmin: currentFormUserData?.roles?.includes("ADMIN"),
        isTeacher: currentFormUserData?.roles?.includes("TEACHER"),
        // userRolesOptions: currentFormUserData?.userRoles?.map(({ role }) => ({
        //   label: UserRole[role as UserRolesNamesType],
        //   value: role,
        // })),
        isEditUser: true,
      });
    }
  }, [isEditUser, currentFormUserData, reset]);

  const handleUserDataForm = useCallback(
    ({ ...userDataForm }: IUserForm) => {
      // userDataForm.roles = userDataForm?.userRolesOptions?.map(
      //   (role) => role.value
      // ) as UserRolesNamesType[];
      if (isEditUser) {
        delete userDataForm?.password;
        delete userDataForm?.email;
      }
      delete userDataForm?.confirmPassword;
      delete userDataForm?.isEditUser;
      return userDataForm;
    },
    [isEditUser]
  );

  const handleSubmitUser = useCallback(
    (userDataForm: IUserForm) => {
      const onSuccess = () => {
        toast(`Usuário ${isEditUser ? "editado" : "criado"} com sucesso!`);
        router.push("/admin/users");
      };
      const onError = (error: any) => {
        if (error?.response?.status === 409) {
          setError("email", {
            message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_ALREADY_EXISTS,
          });
        } else {
          showAlert({
            title: `Erro ao ${isEditUser ? "editar" : "criar"} usuário`,
            description: error?.message,
            variant: "danger",
          });
        }
      };
      const handledUserDataForm = handleUserDataForm(userDataForm);
      if (isEditUser) {
        updateUser(handledUserDataForm, { onSuccess, onError });
      } else {
        createUser(handledUserDataForm, { onSuccess, onError });
      }
    },
    [
      router,
      isEditUser,
      createUser,
      updateUser,
      showAlert,
      handleUserDataForm,
      setError,
    ]
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
        <div className="grid grid-cols-12 gap-x-8 gap-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                required
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
            disabled={isEditUser}
            render={({ field, fieldState }) => (
              <Input
                formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                required
                label="Email"
                placeholder="Gym@email.com"
                type="email"
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="dateOfBirth"
            control={control}
            disabled={isEditUser}
            render={({ field, fieldState }) => (
              <Input
                formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                required
                label="Data de Nascimento"
                type="date"
                max={new Date().toISOString().split("T")[0]}
                error={fieldState?.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="genderOption"
            control={control}
            disabled={isEditUser}
            render={({ field: { onChange, ...restField }, fieldState }) => (
              <Select
                formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                required
                onChangeSingleOption={(option) => onChange(option)}
                label="Sexo"
                options={genderOptions}
                error={fieldState?.error?.message}
                {...restField}
              />
            )}
          />

          {!isEditUser && (
            <>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                    required
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
                    formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                    required
                    label="Confirmar senha"
                    placeholder="********"
                    type="password"
                    error={fieldState?.error?.message}
                    {...field}
                  />
                )}
              />
            </>
          )}
          <div className="flex items-end gap-4 sm:gap-6 col-span-12">
            <Controller
              name="isTeacher"
              control={control}
              render={({ field: { value, onChange, ...restField } }) => (
                <Checkbox
                  id={restField.name}
                  label="É Professor?"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
                  {...restField}
                />
              )}
            />
            <Controller
              name="isAdmin"
              control={control}
              render={({ field: { value, onChange, ...restField } }) => (
                <Checkbox
                  id={restField.name}
                  label="É Administrador?"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
                  {...restField}
                />
              )}
            />
          </div>
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
