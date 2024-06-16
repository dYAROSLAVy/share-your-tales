import { useUserSignUp } from "@entities/user/api";
import { SignUpRequest } from "@shared/apollo";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { signUpResolver } from "./sign-up-resolver";
import { useAuthorization } from "@entities/user";

type useSignUnFormProps = {
  onSuccess?: () => void;
};

export const useSignUnForm = ({ onSuccess }: useSignUnFormProps) => {
  const [userSignUp, { loading }] = useUserSignUp();

  const { changeAccessToken } = useAuthorization();

  const formMethods = useForm<SignUpRequest>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: signUpResolver,
    mode: "onTouched",
  });

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
        changeAccessToken(response.data.userSignUp.token);
      }
      setTimeout(() => {
        onSuccess?.();
      }, 1);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    formMethods,
    loading,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isValid: formMethods.formState.isValid,
  };
};
