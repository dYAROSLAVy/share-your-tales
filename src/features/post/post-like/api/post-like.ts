import { useGetFavoritesPosts, usePostLike } from "@entities/posts";
import { Alert } from "react-native";

export const usePostLikePress = () => {
  const [postLike, { loading }] = usePostLike();
  const { refetch } = useGetFavoritesPosts({
    variables: { limit: 10, afterCursor: null },
  });

  const onLikeClick = async (id: string) => {
    try {
      const response = await postLike({
        variables: { id },
      });
      refetch();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onLikeClick,
  };
};
