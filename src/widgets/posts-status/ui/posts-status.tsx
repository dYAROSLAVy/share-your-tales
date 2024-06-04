import { StatusText, StatusTitle } from "@entities/status";
import { SvgCheckCircle } from "@shared/assets/icons/components/check-circle";
import { View } from "react-native";
import { useThemeObject } from "@shared/themes";
import { createStyles } from "./posts-status.style";
import { FC } from "react";

type PostsStatusProps = {
  text: string;
};

export const PostStatus: FC<PostsStatusProps> = ({ text }) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.wrap}>
      <StatusTitle title="UPS" />
      <View style={styles.bottomWrap}>
        <SvgCheckCircle />
        <StatusText text={text}></StatusText>
      </View>
    </View>
  );
};
