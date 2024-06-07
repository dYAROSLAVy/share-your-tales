import { SignUpRequest, useUserSignUp } from "@shared/apollo";
import { AsyncStorageService } from "@shared/utils";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useSignUnForm = () => {
  const [userSignUp, { loading }] = useUserSignUp();

  const formMethods = useForm<SignUpRequest>();

  const onSubmit = async ({
    email,
    password,
    passwordConfirm,
  }: SignUpRequest) => {
    try {
      const response = await userSignUp({
        variables: { email, password, passwordConfirm },
      });
      if (response.data?.userSignUp.problem) {
        Alert.alert(response.data?.userSignUp.problem?.message);
      }
      if (response.data?.userSignUp.token) {
        AsyncStorageService.saveAccessToken(response.data.userSignUp.token);
        // navigation.navigate("MainStack", { screen: "Congrats" });
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    formMethods,
    loading,
    onSubmit: formMethods.handleSubmit(onSubmit),
  };
};
