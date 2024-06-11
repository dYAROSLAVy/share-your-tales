import { usePostDelete } from "@entities/posts";
import { Alert } from "react-native";

export const usePostDeleteSwipe = () => {
  const [postDelete, { loading }] = usePostDelete();

  const onDeleteClick = async (id: string) => {
    try {
      const response = await postDelete({
        variables: { id },
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    loading,
    onDeleteClick,
  };
};
