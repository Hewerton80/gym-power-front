import { Gender, Prisma } from "@/prisma/generated/client";
import { ToZodObjectSchema } from "../zodHelpers";
import { z } from "zod";
import { CONSTANTS } from "@/shared/constants";
import { isValid as isValidDate, startOfDay } from "date-fns";
import { hashSync } from "bcrypt";

const {
  REQUIRED_FIELDS,
  INVALID_EMAIL,
  INVALID_DATE,
  PASSWORD_MIN_LENGTH,
  MUST_BE_VALID,
} = CONSTANTS.VALIDATION_ERROR_MESSAGES;

export const createUserSchema = z.object<
  ToZodObjectSchema<Prisma.UserCreateInput>
>({
  name: z
    .string({ required_error: REQUIRED_FIELDS })
    .min(1, REQUIRED_FIELDS)
    .trim(),
  email: z
    .string({ required_error: REQUIRED_FIELDS })
    .min(1, REQUIRED_FIELDS)
    .email({ message: INVALID_EMAIL })
    .trim(),
  password: z
    .string({ required_error: REQUIRED_FIELDS })
    .min(6, PASSWORD_MIN_LENGTH)
    .transform((password) => hashSync(String(password).trim(), 10)),
  gender: z
    .string({ required_error: REQUIRED_FIELDS })
    .refine(
      (gender) => Gender?.[gender as Gender],
      `${MUST_BE_VALID}: ${Object.keys(Gender).join(" | ")}`
    ),
  dateOfBirth: z
    .string({ required_error: REQUIRED_FIELDS })
    .refine((dateOfBirth) => isValidDate(new Date(dateOfBirth)), INVALID_DATE)
    .transform((dateOfBirth) => startOfDay(new Date(dateOfBirth))),
  isAdmin: z.boolean({ required_error: REQUIRED_FIELDS }),
  isTeacher: z.boolean({ required_error: REQUIRED_FIELDS }),
});

export const updateUserSchema = createUserSchema
  .omit({ email: true })
  .partial();
