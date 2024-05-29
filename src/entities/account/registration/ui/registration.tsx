import { Alert, SafeAreaView, Text, View } from "react-native";
import { createStyles } from "../../styles/account.styles";
import { ButtonPrimary, ButtonText } from "@shared/ui/buttons";
import { InputBase } from "@shared/ui/forms/inputs/input-base/input-base";
import { InputPassword } from "@shared/ui/forms/inputs/input-password/input-password";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { USER_SING_UP } from "../model/graph";
import { SignUpRequest } from "../model/types";
import { useThemeObject } from "@shared/themes";
import { AsyncStorageService } from "@entities/account";

export const Registration = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { control, handleSubmit } = useForm();

  const [userSignUp, { loading }] = useMutation(USER_SING_UP);

  const onSubmit = async (formData: SignUpRequest) => {
    try {
      const response = await userSignUp({ variables: formData });
      if (response.data.userSignUp.problem !== null) {
        Alert.alert(response.data.userSignUp.problem.message);
      }
      if (response.data.userSignUp.token) {
        AsyncStorageService.saveAccessToken(response.data.userSignUp.token);
        navigation.navigate("Status");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topInner}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Join us</Text>
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
          <InputPassword
            label="Confirm password"
            placeholder="Confirm your password"
            control={control}
            name={"passwordConfirm"}
          />
        </View>
      </View>
      <View style={styles.bottomInner}>
        <View style={styles.registerWrap}>
          <Text style={styles.text}>Already have an account?</Text>
          <ButtonText text="Log in" onPress={() => navigation.goBack()} />
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
