import { useGetFavoritesPosts, usePostUnlike } from "@entities/posts";
import { Alert } from "react-native";

export const usePostUnlikePress = () => {
  const [postUnlike, { loading }] = usePostUnlike();
  const { refetch } = useGetFavoritesPosts({
    variables: { limit: 10, afterCursor: null },
  });

  const onUnlikeClick = async (id: string) => {
    try {
      const response = await postUnlike({
        variables: { id },
      });
      refetch();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onUnlikeClick,
  };
};
