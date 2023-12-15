import { Prisma } from "@prisma/client";
import { ToZodObjectSchema } from "../zodHelpers";
import { z } from "zod";
import { CONSTANTS } from "@/shared/constants";

const {
  REQUIRED_FIELDS,
  INVALID_EMAIL,
  INVALID_DATE,
  PASSWORD_MIN_LENGTH,
  MUST_BE_NUMBER,
  MUST_BE_POSITIVE,
  MUST_BE_VALID,
} = CONSTANTS.VALIDATION_ERROR_MESSAGES;

export const createTrainingPlan = z.object<
  ToZodObjectSchema<Prisma.TrainingPlanCreateInput>
>({
  name: z
    .string({ required_error: REQUIRED_FIELDS })
    .min(1, REQUIRED_FIELDS)
    .trim(),
  trainings: z
    .array(
      z.object({
        // name: z.string().min(1, REQUIRED_FIELDS).trim(),
        order: z
          .number({
            required_error: REQUIRED_FIELDS,
            invalid_type_error: MUST_BE_NUMBER,
          })
          .min(1, MUST_BE_POSITIVE),
        exercises: z
          .array(
            z.object({
              exerciseId: z.string().min(1, REQUIRED_FIELDS).trim(),
              order: z
                .number({
                  required_error: REQUIRED_FIELDS,
                  invalid_type_error: MUST_BE_NUMBER,
                })
                .min(1, MUST_BE_POSITIVE),
              intervalInSeconds: z
                .number({
                  required_error: REQUIRED_FIELDS,
                  invalid_type_error: MUST_BE_NUMBER,
                })
                .min(1, MUST_BE_POSITIVE),
            }),
            { required_error: REQUIRED_FIELDS }
          )
          .min(1, REQUIRED_FIELDS),
      }),
      { required_error: REQUIRED_FIELDS }
    )
    .min(1, REQUIRED_FIELDS),
});
