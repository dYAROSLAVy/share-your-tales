import { ButtonPlus } from "@shared/ui/buttons";
import { createStyles } from "./posts-add-button.styles";
import { useThemeObject } from "@shared/themes";

export const PostsAddButton = () => {
  const styles = useThemeObject(createStyles);

  return <ButtonPlus style={styles.root} />;
};
