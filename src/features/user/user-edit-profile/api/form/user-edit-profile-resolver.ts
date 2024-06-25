import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP } from "@shared/constants/regexp";
import { VALIDATION_ERRORS } from "@shared/constants/validation-errors";
import { z } from "zod";

const editProfileSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, VALIDATION_ERRORS.required)
    .email(VALIDATION_ERRORS.invalidEmail),
  phone: z
    .literal(null)
    .or(
      z.string().trim().regex(REGEXP.phone, VALIDATION_ERRORS.phone).optional()
    ),

  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  country: z.string().optional(),
});

export type EditProfileFields = z.infer<typeof editProfileSchema>;

export const editProfileResolver = zodResolver(editProfileSchema);
