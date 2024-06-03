import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { SignInRequest, useUserSignIn } from "@shared/apollo";
import { InputBase, InputPassword } from "@shared/ui/forms/inputs";
import { AsyncStorageService } from "@shared/utils";
import { AuthBottom, AuthHeader, AuthLayout } from "@entities/account";
import { FormWrapper, InputsList } from "@shared/ui/forms";

export const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const [userSignIn, { loading }] = useUserSignIn();

  const onSubmit = async ({ email, password }: SignInRequest) => {
    if (!email || !password) {
      return;
    }
    try {
      const response = await userSignIn({ variables: { email, password } });
      if (response.data?.userSignIn.problem) {
        Alert.alert(response.data.userSignIn.problem.message);
      }
      if (response.data?.userSignIn.token) {
        await AsyncStorageService.saveAccessToken(
          response.data.userSignIn.token
        );
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <AuthLayout>
      <FormWrapper>
        <AuthHeader
          subtitle="You will be able to fully communicate "
          title="Log in"
        />
        <InputsList>
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
        </InputsList>
      </FormWrapper>
      <AuthBottom
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        subtitle="No account?"
        loading={loading}
        textButton="Register"
        onTextBtnPress={() => navigation.navigate("Registration")}
      />
    </AuthLayout>
  );
};
