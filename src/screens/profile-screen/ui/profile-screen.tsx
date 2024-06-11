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
import { useState } from "react";
import { useUserMe } from "@entities/user";
import { ImageModel } from "@shared/utils/model/types";

export const ProfileScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const [modalVisible, setModalVisible] = useState(false);

  const { data } = useUserMe();

  const [image, setImage] = useState<ImageModel | null>(null);

  const [imageUrl, setImageUrl] = useState(
    data?.userMe.avatarUrl !== null ? data?.userMe.avatarUrl : null
  );

  const [date, setDate] = useState(
    data?.userMe.birthDate !== null ? data?.userMe.birthDate : ""
  );

  const [selectedId, setSelectedId] = useState(
    data?.userMe.gender !== null ? data?.userMe.gender : ""
  );

  const { openGallery } = useImagePicker({
    setImage,
    setImageUrl,
    onComplete: () => setModalVisible(false),
  });

  const {
    onSubmit,
    formMethods: { control },
  } = useUserEditProfileForm(image, selectedId, date);

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader
        tile="Profile"
        navigation={navigation}
        text="Done"
        onSubmit={onSubmit}
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
      />
    </SafeAreaView>
  );
};
