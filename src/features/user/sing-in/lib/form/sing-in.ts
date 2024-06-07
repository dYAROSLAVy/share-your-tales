import { SignInRequest, useUserSignIn } from "@shared/apollo";
import { AsyncStorageService } from "@shared/utils";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useSignInForm = () => {
  const [userSignIn, { loading }] = useUserSignIn();

  const formMethods = useForm<SignInRequest>();

  const onSubmit = async ({ email, password }: SignInRequest) => {
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

  return {
    formMethods,
    loading,
    onSubmit: formMethods.handleSubmit(onSubmit),
  };
};
