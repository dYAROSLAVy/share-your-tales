import { ButtonPrimary } from "@shared/ui/buttons";
import { SafeAreaView, View } from "react-native";
import { createStyles } from "./create-post-screen.styles";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { InputBase, FormInner } from "@shared/ui/forms";
import { FC, useState } from "react";
import { PostsUploadPhoto } from "@entities/posts";
import { useCreatePostForm } from "@features/post";
import { ChoicePhotoModal, useImagePicker } from "@features/user";
import { CreatePostScreenProps } from "@shared/navigation/screen-props";
import { ImageModel } from "@shared/utils/model/types";
import { Asset } from "react-native-image-picker";

export const CreatePostScreen: FC<CreatePostScreenProps> = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState<Asset | null | ImageModel>(null);

  const { openGallery, openCamera } = useImagePicker({
    setImage,
    onComplete: () => setModalVisible(false),
  });

  const onGoBack = () => {
    navigation.goBack();
  };

  const {
    isValid,
    isLoading,
    onSubmit,
    formMethods: { control },
  } = useCreatePostForm({ image, onGoBack });

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader
        tile="Create post"
        navigation={navigation}
        isCross
        onPress={() => setImage(null)}
      />
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <PostsUploadPhoto
            onPress={() => setModalVisible(true)}
            imageURI={image !== null ? image?.uri : ""}
          />
          <FormInner>
            <InputBase
              name="title"
              label="Title"
              placeholder="Enter title of post"
              control={control}
            />
            <InputBase
              isTextArea
              name="description"
              label="Post"
              placeholder="Enter your post"
              control={control}
            />
          </FormInner>
        </View>
        <ButtonPrimary
          text="Publish"
          onPress={onSubmit}
          isLoading={isLoading}
          disabled={!isValid || !image}
        />
      </View>
      <ChoicePhotoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        launchImageLibrary={openGallery}
        launchCamera={openCamera}
      />
    </SafeAreaView>
  );
};
