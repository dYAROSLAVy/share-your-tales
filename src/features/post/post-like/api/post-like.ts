import { usePostLike } from "@entities/posts";
import { Alert } from "react-native";

export const usePostLikePress = () => {
  const [postLike, { loading }] = usePostLike();

  const onLikeClick = async (id: string) => {
    try {
      const response = await postLike({
        variables: { id },
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onLikeClick,
  };
};
