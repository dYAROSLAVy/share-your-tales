import { useAuthorization } from "@entities/user";
import { useUserSignIn } from "@entities/user/api";
import { SignInRequest } from "@shared/apollo";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useSignInForm = () => {
  const [userSignIn, { loading }] = useUserSignIn();

  const { changeAccessToken } = useAuthorization();

  const formMethods = useForm<SignInRequest>();

  const onSubmit = async ({ email, password }: SignInRequest) => {
    try {
      const response = await userSignIn({ variables: { email, password } });
      if (response.data?.userSignIn.problem) {
        Alert.alert(response.data.userSignIn.problem.message);
      }
      if (response.data?.userSignIn.token) {
        changeAccessToken(response.data.userSignIn.token);
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
