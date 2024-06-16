export const VALIDATION_ERRORS = {
  required: "Required field",
  invalidEmail: "Enter correct e-mail",
  maxCharacters: (length: number) =>
    `The field can be a maximum of ${length} characters`,
  minCharacters: (length: number) =>
    `The field can be a minimum of ${length} characters`,
  emailAlreadyRegistered: "This email is already registered",
  passwordsNotMatch: "Passwords do not match",
  invalidUrl: "Invalid url",
  invalidField: "Invalid field",
  invalidCurrency: "Invalid currency",
  selectRatePeriod: "Select Rate Period",
  inputRate: "Input Rate",
  phone: "Enter correct phone number",
};
