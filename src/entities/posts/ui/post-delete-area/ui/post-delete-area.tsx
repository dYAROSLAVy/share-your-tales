import { ButtonIcon } from "@shared/ui/buttons";
import { View } from "react-native";

export type PostDeleteAreaProps = {
  onDeleteClick: (id: string) => Promise<void>;
  id: string;
};

export const PostDeleteArea = ({ onDeleteClick, id }: PostDeleteAreaProps) => {
  return (
    <View
      style={{
        backgroundColor: "#ccffbd",
        justifyContent: "center",
      }}
    >
      <ButtonIcon text="Delete" onPress={() => onDeleteClick(id)} />
    </View>
  );
};
