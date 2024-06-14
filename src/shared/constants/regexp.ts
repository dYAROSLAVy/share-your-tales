export const REGEXP = {
  lettersLowercase: /(?=.*[a-z])/,
  lettersUppercase: /(?=.*[A-Z])/,
  number: /[0-9]/,
  specSymbols: /[!\"#$%&'()*+,-.\/:;<=>?]/,
  replaceRegexpForNumberPhone: /[^ a-zа-яё\d]/iu,
  whitespaceRegexp: / +/g,
  name: /^[A-Za-z][A-Za-z\s-]/,
  phone: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
  space: /\s/g,
  uploadFileName: /[^a-zA-Z0-9-_.]/g,
  password: /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
};
