"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Input } from "@/components/ui/forms/Input";
import { IUserForm, useMutateUser } from "@/hooks/api/useUser";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { z } from "zod";
import { CONSTANTS } from "@/utils/constants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { useRouter } from "next/navigation";

const { ERROR_MESSAGES } = CONSTANTS;

const userFormSchema = z
  .object<ToZodObjectSchema<IUserForm>>({
    name: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    email: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    password: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
    confirmPassword: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELDS),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export function UserForm() {
  const router = useRouter();
  const { createUser, isSubmitingUser } = useMutateUser();
  const { showAlert } = useAlertModal();

  const { control, formState, handleSubmit } = useForm<IUserForm>({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    mode: "onTouched",
    resolver: zodResolver(userFormSchema),
  });

  const handleCreteUser = useCallback(
    (userDataForm: IUserForm) => {
      const onSuccess = () => {
        toast("Usuário criado com sucesso!");
        router.push("/app/admin/users");
      };
      const onError = (erro: Error) => {
        showAlert({
          title: "Erro ao criar usuário",
          description: erro?.message,
          variant: "danger",
        });
      };
      delete userDataForm?.confirmPassword;
      userDataForm.roles = ["TEACHER"];
      createUser(userDataForm, { onSuccess, onError });
    },
    [router, createUser, showAlert]
  );

  return (
    <Card>
      <Card.Header>
        <Card.Title>Criar Usuário</Card.Title>
      </Card.Header>
      <Card.Body>
        <form
          onSubmit={handleSubmit(handleCreteUser)}
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
            Criar
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
