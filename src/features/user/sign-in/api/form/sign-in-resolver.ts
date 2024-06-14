import { zodResolver } from "@hookform/resolvers/zod";
import { VALIDATION_ERRORS } from "@shared/constants/validation-errors";
import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, VALIDATION_ERRORS.required)
    .email(VALIDATION_ERRORS.invalidEmail),
  password: z.string().trim().min(1, VALIDATION_ERRORS.required),
});

export type SignInFields = z.infer<typeof signInSchema>;

export const signInResolver = zodResolver(signInSchema);
