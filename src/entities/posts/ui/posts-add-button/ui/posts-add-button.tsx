import { ButtonPlus } from "@shared/ui/buttons";
import { createStyles } from "./posts-add-button.styles";
import { useThemeObject } from "@shared/themes";
import { FC } from "react";

type PostsAddButtonProps = {
  onPress: () => void;
};

export const PostsAddButton: FC<PostsAddButtonProps> = ({ onPress }) => {
  const styles = useThemeObject(createStyles);

  return <ButtonPlus onPress={onPress} style={styles.root} />;
};
