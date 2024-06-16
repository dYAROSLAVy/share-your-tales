import { useUserEditProfile, useUserMe } from "@entities/user/api";
import { EditProfileRequest, GenderType } from "@shared/apollo";
import { ImageLink } from "@shared/utils";
import { ImageModel } from "@shared/utils/model/types";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { editProfileResolver } from "./user-edit-profile-resolver";
import { Asset } from "react-native-image-picker";

type useUserEditProfileFormProps = {
  image: Asset | ImageModel;
  selectedId?: string;
  date?: string;
  onGoBack?: () => void;
};

export const useUserEditProfileForm = ({
  image,
  selectedId,
  date,
  onGoBack,
}: useUserEditProfileFormProps) => {
  const [userEditProfile, { loading }] = useUserEditProfile();

  const { data } = useUserMe();

  const user = data?.userMe;

  const formMethods = useForm<EditProfileRequest>({
    defaultValues: {
      email: user?.email,
      firstName: user?.firstName,
      middleName: user?.middleName,
      lastName: user?.lastName,
      phone: user?.phone,
      country: user?.country,
    },
    resolver: editProfileResolver,
    mode: "onTouched",
  });

  const onSubmit = async (data: EditProfileRequest) => {
    let avatarUrl;
    if (image !== null) {
      const normalImage = image?.uri ? image?.uri : "";

      console.log(normalImage);

      const responseLink = await ImageLink.getUploadLink(
        normalImage,
        "AVATARS"
      );

      const link = responseLink.data;

      await ImageLink.uploadImage(link, image as ImageModel);

      avatarUrl = link.split("?")[0];
    } else {
      avatarUrl = data.avatarUrl;
    }

    const birthDate = date;

    const { email, country, firstName, lastName, middleName, phone } = data;

    const gender = selectedId === "MALE" ? GenderType.Male : GenderType.Female;

    try {
      const response = await userEditProfile({
        variables: {
          email,
          avatarUrl,
          birthDate,
          country,
          firstName,
          gender,
          lastName,
          middleName,
          phone,
        },
      });
      onGoBack?.();
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
