import {
  FormWrapper,
  InputBase,
  InputPassword,
  FormInner,
} from "@shared/ui/forms";
import { useSignInForm } from "@features/user";
import { AuthBottom, AuthHeader, AuthLayout } from "@entities/user";
import { SignInScreenProps } from "@shared/navigation/screen-props";
import { FC } from "react";
import { AppRoutes } from "@shared/navigation/app-routes";
export const LoginScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const {
    loading,
    onSubmit,
    isValid,
    formMethods: { control },
  } = useSignInForm();

  return (
    <AuthLayout>
      <FormWrapper>
        <AuthHeader
          subtitle="You will be able to fully communicate "
          title="Log in"
        />
        <FormInner>
          <InputBase
            label="E-mail"
            placeholder="Enter your e-mail"
            name="email"
            control={control}
          />
          <InputPassword
            label="Password"
            placeholder="Enter your password"
            name="password"
            control={control}
          />
        </FormInner>
      </FormWrapper>
      <AuthBottom
        disabled={!isValid}
        onSubmit={onSubmit}
        subtitle="No account?"
        loading={loading}
        textButton="Register"
        onTextBtnPress={() => navigation.navigate(AppRoutes.SignUpScreen)}
      />
    </AuthLayout>
  );
};
