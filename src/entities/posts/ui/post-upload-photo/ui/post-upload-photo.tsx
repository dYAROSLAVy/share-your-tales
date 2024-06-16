import { ButtonUpload } from "@shared/ui/buttons";
import { FC } from "react";
import { Image, View } from "react-native";

type PostsAddButtonProps = {
  onPress: () => void;
  imageURI?: string | null;
};

export const PostsUploadPhoto: FC<PostsAddButtonProps> = ({
  onPress,
  imageURI,
}) => {
  return (
    <View>
      {!imageURI && <ButtonUpload onPress={onPress} />}
      {imageURI && <Image source={{ uri: imageURI }} height={166} />}
    </View>
  );
};
