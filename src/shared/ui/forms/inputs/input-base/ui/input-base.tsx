import { Text, TextInput, TextInputProps, View } from "react-native";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { getStyles } from "./input-base.style";

export type InputBaseProps = {
  label?: string;
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
  style,
  secureTextEntry,
  ...props
}: Props<T>) => {
  const { root, input, labelText } = getStyles({ style });
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <View style={root}>
      <Text style={labelText}>{label}</Text>
      <TextInput
        style={input}
        autoCapitalize={"none"}
        placeholder={placeholder}
        placeholderTextColor={"#9b9b9b"}
        onChangeText={onChange}
        keyboardType={"default"}
        secureTextEntry={secureTextEntry}
        {...field}
        value={value}
        {...props}
      />
      {children}
      {error?.message}
    </View>
  );
};
