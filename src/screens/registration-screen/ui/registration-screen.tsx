import { AuthBottom, AuthHeader, AuthLayout } from "@entities/user";
import {
  FormWrapper,
  InputBase,
  InputPassword,
  FormInner,
} from "@shared/ui/forms";
import { useSignUnForm } from "@features/user";
import { SignInScreenProps } from "@shared/navigation/screen-props";
import { FC } from "react";
import { AppRoutes } from "@shared/navigation/app-routes";

export const RegistrationScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const onSuccess = () => {
    navigation.navigate(AppRoutes.MainStack, {
      screen: AppRoutes.CongratsScreen,
    });
  };

  const {
    loading,
    onSubmit,
    formMethods: { control },
    isValid,
  } = useSignUnForm({ onSuccess });

  return (
    <AuthLayout>
      <FormWrapper>
        <AuthHeader
          subtitle="You will be able to fully communicate"
          title="Join us"
        />
        <FormInner>
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
        </FormInner>
      </FormWrapper>
      <AuthBottom
        loading={loading}
        onSubmit={onSubmit}
        onTextBtnPress={() => navigation.goBack()}
        subtitle="Already have an account?"
        textButton="Log in"
        disabled={!isValid}
      />
    </AuthLayout>
  );
};
