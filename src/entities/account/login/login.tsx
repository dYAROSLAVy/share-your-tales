import { Alert, SafeAreaView, Text, TextInput, View } from "react-native";
import { useThemeObject } from "@shared/themes/theme-object.hook";
import { createStyles } from "./account.styles";
import { ButtonPrimary, ButtonText } from "@shared/ui/buttons";
import { InputBase } from "@shared/ui/forms/inputs/input-base/input-base";
import { InputPassword } from "@shared/ui/forms/inputs/input-password/input-password";
import { useForm } from "react-hook-form";

export const Login = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topInner}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Log in</Text>
          <Text style={styles.text}>You will be able to fully communicate</Text>
        </View>
        <View style={styles.inputsWrapper}>
          <InputBase
            label="E-mail"
            placeholder="Enter your e-mail"
            control={control}
            name={"email"}
          />
          <InputPassword
            label="Password"
            placeholder="Enter your password"
            control={control}
            name={"password"}
          />
        </View>
      </View>
      <View style={styles.bottomInner}>
        <View style={styles.registerWrap}>
          <Text style={styles.text}>No account?</Text>
          <ButtonText
            text="Register"
            onPress={() => navigation.navigate("Registration")}
          />
        </View>
        <ButtonPrimary text="Continue" onPress={handleSubmit(onSubmit)} disabled/>
      </View>
    </SafeAreaView>
  );
};
