import { ButtonPrimary } from "@shared/ui/buttons";
import { Alert, SafeAreaView, View } from "react-native";
import { createStyles } from "./create-post-screen.styles";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { InputBase, InputsList } from "@shared/ui/forms";
import { useForm } from "react-hook-form";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";
import { PostsUploadPhoto } from "@entities/posts";
import { usePostCreate } from "@shared/apollo";

export const CreatePostScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { control, handleSubmit } = useForm();

  const [imageUrl, setImageURI] = useState(null);

  const onUploadClick = () => {
    const options = {
      title: "Select Image",
      mediaType: "photo",
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        setImageURI(response.assets[0].uri);
      }
    });
  };

  const [postCreate, { loading }] = usePostCreate();

  const onSubmit = async (data) => {
    const mediaUrl = imageUrl;
    const { description, title } = data;
    if (!description || !title || mediaUrl === null) {
      return;
    }
    console.log(description, title, imageUrl);
    try {
      const response = await postCreate({
        variables: { description, mediaUrl, title },
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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
          <PostsUploadPhoto onPress={onUploadClick} imageURI={imageUrl} />
          <InputsList>
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
          </InputsList>
        </View>
        <ButtonPrimary text="Publish" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};
