import {
  FormWrapper,
  InputBase,
  InputPassword,
  FormInner,
} from "@shared/ui/forms";
import { useSignInForm } from "@features/user";
import { AuthBottom, AuthHeader, AuthLayout } from "@entities/user";

export const LoginScreen = ({ navigation }) => {
  const {
    loading,
    onSubmit,
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
            control={control}
            name="email"
          />
          <InputPassword
            label="Password"
            placeholder="Enter your password"
            control={control}
            name="password"
          />
        </FormInner>
      </FormWrapper>
      <AuthBottom
        onSubmit={onSubmit}
        subtitle="No account?"
        loading={loading}
        textButton="Register"
        onTextBtnPress={() => navigation.navigate("Registration")}
      />
    </AuthLayout>
  );
};
