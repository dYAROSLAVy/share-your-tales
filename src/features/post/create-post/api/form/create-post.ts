import { usePostCreate } from "@entities/posts";
import { CreatePostRequest } from "@shared/apollo";
import { ImageLink } from "@shared/utils";
import { ImageModel } from "@shared/utils/model/types";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { createPostResolver } from "./create-post-resolver";
import { Asset } from "react-native-image-picker";
import { useState } from "react";

type CreatePostFormProps = {
  image: Asset | null | ImageModel;
  onGoBack?: () => void;
};

export const useCreatePostForm = ({ image, onGoBack }: CreatePostFormProps) => {
  const [postCreate] = usePostCreate();

  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<CreatePostRequest>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: createPostResolver,
    mode: "onTouched",
  });

  const onSubmit = async (data: CreatePostRequest) => {
    setIsLoading(true);
    const normalImage = image?.uri ? image?.uri : "";

    const responseLink = await ImageLink.getUploadLink(normalImage, "POSTS");

    const link = responseLink.data;

    await ImageLink.uploadImage(link, image as ImageModel);

    const mediaUrl = link.split("?")[0];

    const { description, title } = data;

    try {
      const response = await postCreate({
        variables: { description, mediaUrl, title },
      });
      onGoBack?.();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    isLoading,
    formMethods,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isValid: formMethods.formState.isValid,
  };
};
