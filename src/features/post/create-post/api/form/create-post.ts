import { usePostCreate } from "@entities/posts";
import { CreatePostRequest } from "@shared/apollo";
import { ImageLink } from "@shared/utils";
import { ImageModel } from "@shared/utils/model/types";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useCreatePostForm = (image: ImageModel) => {
  const [postCreate, { loading }] = usePostCreate();

  const formMethods = useForm<CreatePostRequest>();

  const onSubmit = async (data: CreatePostRequest) => {
    const normalImage = image?.uri ? image?.uri : "";

    const responseLink = await ImageLink.getUploadLink(normalImage, "POSTS");

    const link = responseLink.data;

    await ImageLink.uploadImage(link, image);

    const mediaUrl = link.split("?")[0];

    const { description, title } = data;

    try {
      const response = await postCreate({
        variables: { description, mediaUrl, title },
      });
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
