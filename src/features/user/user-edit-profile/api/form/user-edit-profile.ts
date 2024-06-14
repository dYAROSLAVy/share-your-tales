import { useUserEditProfile, useUserMe } from "@entities/user/api";
import { EditProfileRequest, GenderType } from "@shared/apollo";
import { AppRoutes } from "@shared/navigation/app-routes";
import { ProfileScreenProps } from "@shared/navigation/screen-props";
import { ImageLink } from "@shared/utils";
import { ImageModel } from "@shared/utils/model/types";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

type useUserEditProfileFormProps = {
  image: ImageModel;
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

  const formMethods = useForm<EditProfileRequest>({
    defaultValues: {
      email: data?.userMe.email,
      firstName: data?.userMe.firstName,
      middleName: data?.userMe.middleName,
      lastName: data?.userMe.lastName,
      phone: data?.userMe.phone,
      country: data?.userMe.country,
    },
  });

  const onSubmit = async (data: EditProfileRequest) => {
    let avatarUrl;
    if (image !== null) {
      const normalImage = image?.uri ? image?.uri : "";

      const responseLink = await ImageLink.getUploadLink(
        normalImage,
        "AVATARS"
      );

      const link = responseLink.data;

      await ImageLink.uploadImage(link, image);

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
  };
};
