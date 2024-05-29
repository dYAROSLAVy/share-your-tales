import { Alert, SafeAreaView, Text, View } from "react-native";
import { createStyles } from "../../styles/account.styles";
import { ButtonPrimary, ButtonText } from "@shared/ui/buttons";
import { InputBase } from "@shared/ui/forms/inputs/input-base/input-base";
import { InputPassword } from "@shared/ui/forms/inputs/input-password/input-password";
import { useForm } from "react-hook-form";
import { useThemeObject } from "@shared/themes";
import { SignInRequest } from "../model/types";
import { USER_SING_IN } from "../model/graph";
import { useMutation } from "@apollo/client";
import { AsyncStorageService } from "@entities/account";

export const Login = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { control, handleSubmit } = useForm();

  const [userSignIn, { loading }] = useMutation(USER_SING_IN);

  const onSubmit = async (formData: SignInRequest) => {
    try {
      const response = await userSignIn({ variables: formData });
      if (response.data.userSignIn.problem !== null) {
        Alert.alert(response.data.userSignIn.problem.message);
      }
      if (response.data.userSignIn.token) {
        AsyncStorageService.saveAccessToken(response.data.userSignIn.token);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
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
        <ButtonPrimary
          text="Continue"
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </View>
    </SafeAreaView>
  );
};
