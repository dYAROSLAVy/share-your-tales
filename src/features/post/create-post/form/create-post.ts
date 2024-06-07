import { CreatePostRequest, usePostCreate } from "@shared/apollo";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useCreatePostForm = ({
  imageUrl,
}: {
  imageUrl: string | null;
}) => {
  const [postCreate, { loading }] = usePostCreate();

  const formMethods = useForm<CreatePostRequest>();

  const onSubmit = async (data: CreatePostRequest) => {
    const mediaUrl = imageUrl !== null ? imageUrl : "";
    const { description, title } = data;
    console.log(description, title, imageUrl);
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
