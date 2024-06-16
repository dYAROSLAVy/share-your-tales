import { SvgTrash } from "@shared/assets/icons/components/trash";
import { ButtonBase, ButtonIcon } from "@shared/ui/buttons";
import { Text, View } from "react-native";

export type PostDeleteAreaProps = {
  onDeleteClick: (id: string) => Promise<void>;
  id: string;
  styles: {};
  deleteText: {};
  deleteBtn: {};
  deleteInner: {};
};

export const PostDeleteArea = ({
  onDeleteClick,
  id,
  styles,
  deleteText,
  deleteBtn,
  deleteInner,
}: PostDeleteAreaProps) => {
  return (
    <View style={styles}>
      <ButtonBase style={deleteBtn} onPress={() => onDeleteClick(id)}>
        <View style={deleteInner}>
          <SvgTrash />
          <Text style={deleteText}>Delete</Text>
        </View>
      </ButtonBase>
    </View>
  );
};
