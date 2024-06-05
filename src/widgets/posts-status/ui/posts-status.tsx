import { StatusText, StatusTitle } from "@entities/status";
import { SvgCheckCircle } from "@shared/assets/icons/components/check-circle";
import { View } from "react-native";
import { useThemeObject } from "@shared/themes";
import { createStyles } from "./posts-status.style";
import { FC } from "react";

type PostsStatusProps = {
  text: string;
  isCheck?: boolean;
};

export const PostStatus: FC<PostsStatusProps> = ({ text, isCheck }) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.wrap}>
      <StatusTitle title="UPS" />
      <View style={styles.bottomWrap}>
        {isCheck && <SvgCheckCircle />}
        <StatusText text={text}></StatusText>
      </View>
    </View>
  );
};
