import { useGetMyPosts, useGetPosts, usePostDelete } from "@entities/posts";
import { PostFilterType } from "@shared/apollo";
import { Alert } from "react-native";

export const usePostDeleteSwipe = () => {
  const [postDelete, { loading }] = usePostDelete();

  const { refetch } = useGetMyPosts({
    variables: { limit: 10, afterCursor: null },
  });

  const { refetch: mainRefetch } = useGetPosts({
    variables: { type: PostFilterType.New, limit: 10, afterCursor: null },
  });

  const onDeleteClick = async (id: string) => {
    try {
      const response = await postDelete({
        variables: { id },
      });
      refetch();
      mainRefetch();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onDeleteClick,
  };
};
