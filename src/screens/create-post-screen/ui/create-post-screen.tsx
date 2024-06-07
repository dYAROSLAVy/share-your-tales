import { ButtonPrimary } from "@shared/ui/buttons";
import { SafeAreaView, View } from "react-native";
import { createStyles } from "./create-post-screen.styles";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { InputBase, FormInner } from "@shared/ui/forms";
import { useState } from "react";
import { PostsUploadPhoto } from "@entities/posts";
import { useCreatePostForm } from "@features/post";
import { ChoicePhotoModal, useImagePicker } from "@features/user";

export const CreatePostScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const [modalVisible, setModalVisible] = useState(false);

  const [imageUrl, setImageURI] = useState(null);

  const { openGallery } = useImagePicker({ setImageURI });

  const {
    loading,
    onSubmit,
    formMethods: { control },
  } = useCreatePostForm({ imageUrl });

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader
        tile="Create post"
        navigation={navigation}
        isCross
        onPress={() => setImageURI(null)}
      />
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <PostsUploadPhoto
            onPress={() => setModalVisible(true)}
            imageURI={imageUrl}
          />
          <FormInner>
            <InputBase
              name="title"
              label="Title"
              placeholder="Enter title of post"
              control={control}
            />
            <InputBase
              name="description"
              label="Post"
              placeholder="Enter your post"
              control={control}
            />
          </FormInner>
        </View>
        <ButtonPrimary text="Publish" onPress={onSubmit} isLoading={loading} />
      </View>
      <ChoicePhotoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        launchImageLibrary={openGallery}
      />
    </SafeAreaView>
  );
};
