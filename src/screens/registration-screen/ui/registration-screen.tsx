import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { AsyncStorageService } from "@shared/utils";
import { AuthBottom, AuthHeader, AuthLayout } from "@entities/account";
import { FormWrapper, InputBase, InputPassword, InputsList } from "@shared/ui/forms";
import { SignUpRequest, useUserSignUp } from "@shared/apollo";

export const RegistrationScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const [userSignUp, { loading }] = useUserSignUp();

  const onSubmit = async ({
    email,
    password,
    passwordConfirm,
  }: SignUpRequest) => {
    if (!email || !password || !passwordConfirm) {
      return;
    }
    try {
      const response = await userSignUp({
        variables: { email, password, passwordConfirm },
      });
      if (response.data?.userSignUp.problem) {
        Alert.alert(response.data?.userSignUp.problem?.message);
      }
      if (response.data?.userSignUp.token) {
        AsyncStorageService.saveAccessToken(response.data.userSignUp.token);
        navigation.navigate("MainStack", { screen: "Status" });
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <AuthLayout>
      <FormWrapper>
        <AuthHeader
          subtitle="You will be able to fully communicate"
          title="Join us"
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
          <InputPassword
            label="Confirm password"
            placeholder="Confirm your password"
            control={control}
            name={"passwordConfirm"}
          />
        </InputsList>
      </FormWrapper>
      <AuthBottom
        handleSubmit={handleSubmit}
        loading={loading}
        onSubmit={onSubmit}
        onTextBtnPress={() => navigation.goBack()}
        subtitle="Already have an account?"
        textButton="Log in"
      />
    </AuthLayout>
  );
};
