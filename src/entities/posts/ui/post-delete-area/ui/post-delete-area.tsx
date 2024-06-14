import { ButtonIcon } from "@shared/ui/buttons";
import { View } from "react-native";

export type PostDeleteAreaProps = {
  onDeleteClick: (id: string) => Promise<void>;
  id: string;
  styles: any;
};

export const PostDeleteArea = ({
  onDeleteClick,
  id,
  styles,
}: PostDeleteAreaProps) => {
  return (
    <View style={styles}>
      <ButtonIcon text="Delete" onPress={() => onDeleteClick(id)} />
    </View>
  );
};
