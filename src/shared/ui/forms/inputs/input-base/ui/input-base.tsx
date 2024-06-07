import { Text, TextInput, TextInputProps, View } from "react-native";
import { FC, useState } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { getStyles } from "./input-base.style";

export const InputBase: FC<InputBaseProps> = ({
  label,
  placeholder,
  children,
  name,
  control,
  style,
  secureTextEntry,
}) => {
  const { root, input, labelText } = getStyles({ style });
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <View style={root}>
      <Text style={labelText}>{label}</Text>
      <TextInput
        style={input}
        autoCapitalize={'none'}
        placeholder={placeholder}
        placeholderTextColor={"#9b9b9b"}
        value={field.value}
        onChangeText={field.onChange}
        keyboardType={"default"}
        secureTextEntry={secureTextEntry}
      />
      {children}
    </View>
  );
};

export type InputBaseProps = {
  label?: string;
  name: string;
  control: Control<FieldValues>;
} & TextInputProps;
