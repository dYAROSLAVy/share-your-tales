import { Text, TextInput, TextInputProps, View } from "react-native";
import {
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { getStyles } from "./input-base.style";

export type InputBaseProps = {
  label?: string;
  error?: FieldError | undefined;
  isTextArea?: boolean;
} & TextInputProps;

type OmittedTagProps = Omit<
  InputBaseProps,
  "value" | "onChange" | "defaultValue"
>;

interface Props<T extends FieldValues>
  extends OmittedTagProps,
    UseControllerProps<T> {}

export const InputBase = <T extends FieldValues>({
  label,
  placeholder,
  children,
  name,
  control,
  isTextArea,
  style,
  secureTextEntry,
  ...props
}: Props<T>) => {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  const { root, input, labelText, errorText } = getStyles({
    style,
    error,
    isTextArea,
  });

  return (
    <View style={root}>
      <Text style={labelText}>{label}</Text>
      <TextInput
        style={input}
        multiline={isTextArea}
        autoCapitalize={"none"}
        placeholder={placeholder}
        placeholderTextColor={error ? "#c2534c" : "#9b9b9b"}
        onChangeText={onChange}
        keyboardType={"default"}
        secureTextEntry={secureTextEntry}
        {...field}
        value={value}
        {...props}
      />
      {children}
      <Text style={errorText}>{error?.message}</Text>
    </View>
  );
};
