import { z } from "zod";
import { CONSTANTS } from "@/shared/constants";

const { REQUIRED_FIELDS, MUST_BE_NUMBER, MUST_BE_POSITIVE } =
  CONSTANTS.VALIDATION_ERROR_MESSAGES;

export const trainingPlanSchema = z.object({
  name: z
    .string({ required_error: REQUIRED_FIELDS })
    .min(1, REQUIRED_FIELDS)
    .trim(),
  // trainings: z
  //   .array(
  //     z.object({
  //       // name: z.string().min(1, REQUIRED_FIELDS).trim(),
  //       order: z
  //         .number({
  //           required_error: REQUIRED_FIELDS,
  //           invalid_type_error: MUST_BE_NUMBER,
  //         })
  //         .min(1, MUST_BE_POSITIVE),
  //       exercises: z
  //         .array(
  //           z.object({
  //             exerciseId: z.string().min(1, REQUIRED_FIELDS).trim(),
  //             order: z
  //               .number({
  //                 required_error: REQUIRED_FIELDS,
  //                 invalid_type_error: MUST_BE_NUMBER,
  //               })
  //               .min(1, MUST_BE_POSITIVE),
  //             intervalInSeconds: z
  //               .number({
  //                 required_error: REQUIRED_FIELDS,
  //                 invalid_type_error: MUST_BE_NUMBER,
  //               })
  //               .min(1, MUST_BE_POSITIVE),
  //           }),
  //           { required_error: REQUIRED_FIELDS }
  //         )
  //         .min(1, REQUIRED_FIELDS),
  //     }),
  //     { required_error: REQUIRED_FIELDS }
  //   )
  //   .min(1, REQUIRED_FIELDS),
});
