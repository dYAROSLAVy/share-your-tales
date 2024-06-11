import { createStyles } from "./user-profile-form.styles";
import { useThemeObject } from "@shared/themes";
import { View } from "react-native";
import { BirthDatePicker } from "@entities/user";
import { FormInner, FormTitle, InputBase } from "@shared/ui/forms";
import { Control } from "react-hook-form";
import { FC, useMemo, useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { TYPOGRAPHY } from "@shared/constants";
import { EditProfileRequest } from "@shared/apollo";

type UserProfileFormProps = {
  control: Control<EditProfileRequest, any>;
  selectedId: string | undefined;
  date?: string | null;
  setDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const UserProfileForm: FC<UserProfileFormProps> = ({
  control,
  setSelectedId,
  date,
  setDate,
  selectedId,
}) => {
  const styles = useThemeObject(createStyles);

  const [open, setOpen] = useState(false);

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "MALE",
        label: "Male",
        value: "MALE",
        borderSize: 1,
        size: 20,
        containerStyle: {
          marginHorizontal: 0,
          paddingHorizontal: 0,
          gap: 0,
        },
        labelStyle: { ...TYPOGRAPHY.body5Regular16 },
      },
      {
        id: "FEMALE",
        label: "Female",
        value: "FEMALE",
        borderSize: 1,
        size: 20,
        containerStyle: {
          marginHorizontal: 0,
        },
        labelStyle: { ...TYPOGRAPHY.body5Regular16 },
      },
    ],
    []
  );

  return (
    <View style={styles.root}>
      <FormInner>
        <FormTitle title="Personal info" />
        <FormInner>
          <InputBase
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
            control={control}
          />
          <InputBase
            name="middleName"
            label="Last name"
            placeholder="Enter your last name"
            control={control}
          />
          <InputBase
            name="lastName"
            label="Surname"
            placeholder="Enter your surname"
            control={control}
          />
        </FormInner>
      </FormInner>
      <FormInner>
        <FormTitle title="Gender" />
        <RadioGroup
          containerStyle={{
            alignItems: "flex-start",
          }}
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </FormInner>
      <FormInner>
        <FormTitle title="Date of birth" />
        <FormInner>
          <InputBase
            name="birthDate"
            label="B-day"
            placeholder="Select date of birth"
            control={control}
            defaultValue={date}
            onPressIn={() => setOpen(true)}
          />
          <BirthDatePicker
            datee={date}
            setDatee={setDate}
            open={open}
            setOpen={setOpen}
          />
        </FormInner>
      </FormInner>
      <FormInner>
        <FormTitle title="Account info" />
        <FormInner>
          <InputBase name="email" label="E-mail" control={control} />
          <InputBase
            name="phone"
            label="Phone number"
            placeholder="Enter your phone number"
            control={control}
          />
          <InputBase
            name="country"
            label="Country"
            placeholder="Enter your country"
            control={control}
          />
        </FormInner>
      </FormInner>
    </View>
  );
};
