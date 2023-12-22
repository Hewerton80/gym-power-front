"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";
import {
  IUserForm,
  useGetUser,
  useMutateUser,
  userFormSchema,
} from "@/hooks/api/useUser";
import { Controller } from "react-hook-form";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useRouter } from "next/navigation";
import { FeedBackLoading } from "@/components/ui/feedback/FeedBackLoading";
import { isUndefined } from "@/shared/isType";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { Checkbox } from "@/components/ui/forms/Checkbox";
import { Select, SelectOption } from "@/components/ui/forms/Select";
import { Gender } from "@prisma/client";
import { genderOptions } from "@/shared/pickerOptions";
import { format as formatDate } from "date-fns";
import { GenderPtBr } from "@/types/User";
import { handleErrorMessage } from "@/shared/handleErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/api/useAuth";
import { CONSTANTS } from "@/shared/constants";

export default function ProfilePage() {
  const router = useRouter();
  const { showAlert } = useAlertModal();
  const { loggedUser: currentFormUserData } = useAuth();

  const { updateUser, isSubmitingUser } = useMutateUser();

  const {
    control: userFormControl,
    reset: resetUserForm,
    setError: setUserError,
    handleSubmit,
    formState,
  } = useForm<IUserForm>({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      dateOfBirth: "",
      genderOption: null,
      password: "",
      confirmPassword: "",
      isAdmin: false,
      isTeacher: false,
    },
    mode: "onTouched",
    resolver: zodResolver(userFormSchema),
  });

  //   const {
  //     isLoadingUser,
  //     userError,
  //     refetchUser,
  //     user: currentFormUserData,
  //   } = useGetUser(userId);

  //   const isLoadingForm = useMemo(
  //     () => isEditUser && isLoadingUser,
  //     [isEditUser, isLoadingUser]
  //   );

  useEffect(() => {
    if (currentFormUserData) {
      resetUserForm({
        id: currentFormUserData?.id,
        name: currentFormUserData?.name,
        email: currentFormUserData?.email,
        dateOfBirth: currentFormUserData?.dateOfBirth
          ? formatDate(
              new Date(String(currentFormUserData?.dateOfBirth)),
              "yyyy-MM-dd"
            )
          : "",
        genderOption: {
          label: GenderPtBr?.[currentFormUserData?.gender as Gender],
          value: currentFormUserData?.gender,
        },

        isAdmin: currentFormUserData?.roles?.includes("ADMIN"),
        isTeacher: currentFormUserData?.roles?.includes("TEACHER"),
        isEditUser: true,
      });
    }
  }, [currentFormUserData, resetUserForm]);

  const handleUserDataForm = useCallback(({ ...userDataForm }: IUserForm) => {
    console.log({ userDataForm });
    // userDataForm.roles = userDataForm?.userRolesOptions?.map(
    //   (role) => role.value
    // ) as UserRolesNamesType[];
    userDataForm.gender = userDataForm.genderOption?.value as Gender;
    delete userDataForm?.password;
    delete (userDataForm as any)?.email;

    delete userDataForm?.confirmPassword;
    delete userDataForm?.isEditUser;
    delete userDataForm?.genderOption;

    return userDataForm;
  }, []);

  const handleSubmitUser = useCallback(
    (userDataForm: IUserForm) => {
      const onSuccess = () => {
        toast(`Usuário editado com sucesso!`);
        // router.push("/admin/users");
      };
      const onError = (error: any) => {
        if (error?.response?.status === 409) {
          setUserError("email", {
            message: CONSTANTS.API_RESPONSE_MENSSAGES.USER_ALREADY_EXISTS,
          });
        } else {
          showAlert({
            title: `Erro ao "editar" usuário`,
            description: handleErrorMessage(error),
            variant: "danger",
          });
        }
      };
      console.log({ handleSubmitUser: userDataForm });
      const handledUserDataForm = handleUserDataForm(userDataForm);
      updateUser(handledUserDataForm, { onSuccess, onError });
    },
    [updateUser, showAlert, handleUserDataForm, setUserError]
  );

  const handleFormContent = useMemo(() => {
    return (
      <form
        onSubmit={handleSubmit(handleSubmitUser)}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-12 gap-x-8 gap-y-4">
          <Controller
            name="name"
            control={userFormControl}
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
            control={userFormControl}
            // disabled={isEditUser}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                disabled
                formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                required
                label="Email"
                placeholder="Gym@email.com"
                type="email"
                error={fieldState?.error?.message}
              />
            )}
          />
          <Controller
            name="dateOfBirth"
            control={userFormControl}
            // disabled={isEditUser}
            render={({ field: { value, ...restField }, fieldState }) => {
              return (
                <Input
                  value={value || ""}
                  formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                  required
                  label="Data de Nascimento"
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  error={fieldState?.error?.message}
                  {...restField}
                />
              );
            }}
          />
          <Controller
            name="genderOption"
            control={userFormControl}
            // disabled={isEditUser}
            render={({
              field: { onChange, value, ...restField },
              fieldState,
            }) => {
              return (
                <Select
                  value={value}
                  required
                  formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                  onChangeSingleOption={(option) => {
                    onChange(option);
                  }}
                  label="Sexo"
                  options={genderOptions}
                  error={fieldState?.error?.message}
                  {...restField}
                />
              );
            }}
          />

          {/* {!isEditUser && (
            <>
              <Controller
                name="password"
                control={userFormControl}
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
                control={userFormControl}
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
          )} */}
          <div className="flex items-end gap-4 sm:gap-6 col-span-12">
            <Controller
              name="isTeacher"
              control={userFormControl}
              render={({ field: { value, onChange, ...restField } }) => (
                <Checkbox
                  {...restField}
                  id={restField.name}
                  disabled
                  label="É Professor?"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
                />
              )}
            />
            <Controller
              name="isAdmin"
              control={userFormControl}
              render={({ field: { value, onChange, ...restField } }) => (
                <Checkbox
                  {...restField}
                  id={restField.name}
                  disabled
                  label="É Administrador?"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
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
          Editar
        </Button>
      </form>
    );
  }, [
    userFormControl,
    formState.isDirty,
    isSubmitingUser,
    handleSubmit,
    handleSubmitUser,
  ]);

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Editar Perfil</Card.Title>
      </Card.Header>
      <Card.Body>{handleFormContent}</Card.Body>
    </Card.Root>
  );
}
