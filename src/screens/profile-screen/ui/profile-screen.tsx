import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { createStyles } from "./profile-screen.styles";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { Avatar } from "@shared/ui/avatar";
import { UserProfileAvatar } from "@entities/user/ui/user-profile-avatar";
import { FormTitle, InputBase, FormInner } from "@shared/ui/forms";
import { Form, useForm } from "react-hook-form";

export const ProfileScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { control, handleSubmit } = useForm();

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader tile="Profile" navigation={navigation} text="Done" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <UserProfileAvatar />
        <View style={styles.formWrap}>
          <FormInner>
            <FormTitle title="Personal info" />
            <FormInner>
              <InputBase
                name="title"
                label="First name"
                placeholder="Enter your first name"
                control={control}
              />
              <InputBase
                name="description"
                label="Last name"
                placeholder="Enter your last name"
                control={control}
              />
              <InputBase
                name="description"
                label="Surname"
                placeholder="Enter your post"
                control={control}
              />
            </FormInner>
          </FormInner>
          <FormInner>
            <FormTitle title="Gender" />
            <FormInner></FormInner>
          </FormInner>
          <FormInner>
            <FormTitle title="Date of birth" />
            <FormInner>
              <InputBase
                name="title"
                label="B-day"
                placeholder="Select bate of birth"
                control={control}
              />
            </FormInner>
          </FormInner>
          <FormInner>
            <FormTitle title="Account info" />
            <FormInner>
              <InputBase name="title" label="E-mail" control={control} />
              <InputBase
                name="title"
                label="Phone number"
                placeholder="Enter your phone number"
                control={control}
              />
              <InputBase
                name="title"
                label="Country"
                placeholder="Enter your country"
                control={control}
              />
            </FormInner>
          </FormInner>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
