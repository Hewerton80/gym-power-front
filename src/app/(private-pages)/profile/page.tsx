"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";
import {
  IUserForm,
  updateMeFormSchema,
  useMutateMe,
} from "@/hooks/api/useUser";
import { Controller } from "react-hook-form";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/forms/Checkbox";
import { Select } from "@/components/ui/forms/Select";
import { Gender } from "@prisma/client";
import { genderOptions } from "@/shared/pickerOptions";
import { format as formatDate } from "date-fns";
import { GenderPtBr, UserWithComputedFields } from "@/types/User";
import { handleErrorMessage } from "@/shared/handleErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/api/useAuth";
import { CONSTANTS } from "@/shared/constants";
import { Switch } from "@/components/ui/forms/Switch";

export default function ProfilePage() {
  const router = useRouter();
  const { showAlert } = useAlertModal();
  const { loggedUser: currentFormUserData, handleSetContextLoggedUser } =
    useAuth();

  const { updateMe, isSubmitingUserMe } = useMutateMe();

  const {
    control: userFormControl,
    reset: resetUserForm,
    setError: setUserError,
    setValue: setUserFormValue,
    watch: watchUserForm,
    clearErrors: clearUserFormErrors,
    handleSubmit,
    formState,
  } = useForm<IUserForm>({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      dateOfBirth: "",
      genderOption: null,
      currentPassword: "",
      password: "",
      confirmPassword: "",
      showEditPassord: false,
    },
    mode: "onTouched",
    resolver: zodResolver(updateMeFormSchema),
  });

  const [showEditPassord, setShowEditPassord] = useState(false);

  useEffect(() => {
    console.log({ formStateErrors: formState.errors });
  }, [formState.errors]);

  useEffect(() => {
    const subscription = watchUserForm((value, { name }) => {
      if (name === "showEditPassord") {
        const showEditPassordValue = Boolean(value.showEditPassord);
        if (!showEditPassordValue) {
          setUserFormValue("currentPassword", "", { shouldValidate: true });
          setUserFormValue("password", "");
          setUserFormValue("confirmPassword", "");
          clearUserFormErrors([
            "currentPassword",
            "password",
            "confirmPassword",
          ]);
        }
        setShowEditPassord(showEditPassordValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watchUserForm, setUserFormValue, clearUserFormErrors]);

  useEffect(() => {
    if (currentFormUserData) {
      console.log({ currentFormUserData });
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
        showEditPassord: false,
        currentPassword: "",
        password: "",
        confirmPassword: "",
        isAdmin: currentFormUserData?.roles?.includes("ADMIN"),
        isTeacher: currentFormUserData?.roles?.includes("TEACHER"),
        isEditUser: true,
      });
    }
  }, [currentFormUserData, resetUserForm]);

  const handleUserDataForm = useCallback(({ ...userDataForm }: IUserForm) => {
    // console.log({ userDataForm });
    userDataForm.gender = userDataForm.genderOption?.value as Gender;
    if (!userDataForm?.showEditPassord) {
      delete userDataForm?.currentPassword;
      delete userDataForm?.password;
    }
    delete userDataForm.id;
    delete (userDataForm as any)?.email;
    delete (userDataForm as any)?.genderOption;
    delete userDataForm?.confirmPassword;
    delete userDataForm?.isEditUser;
    delete userDataForm.isAdmin;
    delete userDataForm.isTeacher;
    delete userDataForm?.showEditPassord;
    return userDataForm;
  }, []);

  const handleSubmitUser = useCallback(
    (userDataForm: IUserForm) => {
      console.log({ userDataForm });
      const onSuccess = () => {
        toast.success(`Perfil editado com sucesso!`);
        handleSetContextLoggedUser({
          ...(currentFormUserData as UserWithComputedFields),
          name: userDataForm.name,
          gender: userDataForm?.genderOption?.value as Gender,
          dateOfBirth: userDataForm.dateOfBirth,
        });
      };
      const onError = (error: any) => {
        if (error?.response?.status === 409) {
          setUserError("currentPassword", {
            message: CONSTANTS.API_RESPONSE_MENSSAGES.INVALID_PASSWORD,
          });
        } else {
          showAlert({
            title: `Erro ao editar perfil`,
            description: handleErrorMessage(error),
            variant: "danger",
          });
        }
      };
      const handledUserDataForm = handleUserDataForm(userDataForm);
      updateMe(handledUserDataForm, { onSuccess, onError });
    },
    [
      currentFormUserData,
      handleSetContextLoggedUser,
      updateMe,
      showAlert,
      handleUserDataForm,
      setUserError,
    ]
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
                  onCheckedChange={onChange}
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
                  onCheckedChange={onChange}
                  checked={value}
                />
              )}
            />
          </div>
          <div className="flex col-span-12">
            <Controller
              name="showEditPassord"
              control={userFormControl}
              render={({ field: { value, onChange, ...restField } }) => (
                <Switch
                  {...restField}
                  formControlClassName="mt-8 mb-4"
                  id={restField.name}
                  label="Editar Senha?"
                  onCheckedChange={onChange}
                  checked={value}
                />
              )}
            />
          </div>
          {showEditPassord && (
            <>
              <Controller
                name="currentPassword"
                control={userFormControl}
                render={({ field, fieldState }) => {
                  console.log({ fieldStateError: fieldState?.error?.message });
                  return (
                    <Input
                      formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                      required
                      label="Senha atual"
                      placeholder="********"
                      type="password"
                      error={fieldState?.error?.message}
                      {...field}
                    />
                  );
                }}
              />
              <Controller
                name="password"
                control={userFormControl}
                render={({ field, fieldState }) => (
                  <Input
                    formControlClassName="col-span-12 md:col-span-6 xl:col-span-4"
                    required
                    label="Nova senha"
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
                    label="Confirmação da nova senha"
                    placeholder="********"
                    type="password"
                    error={fieldState?.error?.message}
                    {...field}
                  />
                )}
              />
            </>
          )}
        </div>
        <Button
          type="submit"
          className="ml-auto"
          disabled={!formState.isDirty}
          isLoading={isSubmitingUserMe}
        >
          Editar
        </Button>
      </form>
    );
  }, [
    userFormControl,
    formState.isDirty,
    isSubmitingUserMe,
    showEditPassord,
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
