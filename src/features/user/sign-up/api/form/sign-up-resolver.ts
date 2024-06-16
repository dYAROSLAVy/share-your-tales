import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP } from "@shared/constants/regexp";
import { VALIDATION_ERRORS } from "@shared/constants/validation-errors";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, VALIDATION_ERRORS.required)
      .email(VALIDATION_ERRORS.invalidEmail),
    password: z
      .string()
      .trim()
      .regex(REGEXP.password)
      .min(1, VALIDATION_ERRORS.required)
      .min(5, VALIDATION_ERRORS.minCharacters(5))
      .max(32, VALIDATION_ERRORS.maxCharacters(32)),
    passwordConfirm: z
      .string()
      .trim()
      .regex(REGEXP.password)
      .min(1, VALIDATION_ERRORS.required),
  })
  .superRefine(({ password, passwordConfirm }, cts) => {
    if (password !== passwordConfirm) {
      cts.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_ERRORS.passwordsNotMatch,
        path: ["passwordConfirm"],
      });
    }
  });

export type SignUpFields = z.infer<typeof signUpSchema>;

export const signUpResolver = zodResolver(signUpSchema);
