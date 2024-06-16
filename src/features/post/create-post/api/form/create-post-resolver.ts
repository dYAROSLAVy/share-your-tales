import { zodResolver } from "@hookform/resolvers/zod";
import { VALIDATION_ERRORS } from "@shared/constants/validation-errors";
import { z } from "zod";

const createPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, VALIDATION_ERRORS.required)
    .min(5, VALIDATION_ERRORS.minCharacters(5)),
  description: z
    .string()
    .trim()
    .min(1, VALIDATION_ERRORS.required)
    .min(40, VALIDATION_ERRORS.minCharacters(40)),
});

export type SignUpFields = z.infer<typeof createPostSchema>;

export const createPostResolver = zodResolver(createPostSchema);
