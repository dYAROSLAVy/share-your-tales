import { usePostUnlike } from "@entities/posts";
import { Alert } from "react-native";

export const usePostUnlikePress = () => {
  const [postUnlike, { loading }] = usePostUnlike();

  const onUnlikeClick = async (id: string) => {
    try {
      const response = await postUnlike({
        variables: { id },
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onUnlikeClick,
  };
};
