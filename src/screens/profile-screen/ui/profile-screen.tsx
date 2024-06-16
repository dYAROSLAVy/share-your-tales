import { SafeAreaView, ScrollView } from "react-native";
import { createStyles } from "./profile-screen.styles";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { UserProfileAvatar } from "@entities/user/ui/user-profile-avatar";
import {
  ChoicePhotoModal,
  useImagePicker,
  UserProfileForm,
  useUserEditProfileForm,
} from "@features/user";
import { FC, useState } from "react";
import { useUserMe } from "@entities/user";
import { ProfileScreenProps } from "@shared/navigation/screen-props";
import { Asset } from "react-native-image-picker";

export const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const [modalVisible, setModalVisible] = useState(false);

  const { data } = useUserMe();

  const [image, setImage] = useState<Asset | null>(null);

  const [imageUrl, setImageUrl] = useState(data?.userMe.avatarUrl);

  const [date, setDate] = useState(
    data?.userMe.birthDate !== null ? data?.userMe.birthDate : null
  );

  const [selectedId, setSelectedId] = useState(
    data?.userMe.gender !== null ? data?.userMe.gender : ""
  );

  const { openGallery, openCamera } = useImagePicker({
    setImage,
    setImageUrl,
    onComplete: () => setModalVisible(false),
  });

  const onGoBack = () => {
    navigation.goBack();
  };

  const {
    onSubmit,
    formMethods: { control },
    isValid,
  } = useUserEditProfileForm({ image, selectedId, date, onGoBack });

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader
        tile="Profile"
        navigation={navigation}
        text="Done"
        onSubmit={onSubmit}
        isDisabled={!isValid}
      />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <UserProfileAvatar
          onPress={() => setModalVisible(true)}
          newImageURI={imageUrl}
        />
        <UserProfileForm
          control={control}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          date={date}
          setDate={setDate}
        />
      </ScrollView>
      <ChoicePhotoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        launchImageLibrary={openGallery}
        isDeleteButton
        setImage={setImageUrl}
        launchCamera={openCamera}
      />
    </SafeAreaView>
  );
};
