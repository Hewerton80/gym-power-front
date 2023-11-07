import { z } from "zod";

export type ToZodObjectSchema<Type> = {
  [Property in keyof Type]?: z.ZodTypeAny;
};
