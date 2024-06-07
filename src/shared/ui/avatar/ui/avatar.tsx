import { SvgUser } from "@shared/assets/icons/components/user";
import { FC } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import { getStyles } from "./avatar.styles";

export type AvatarProps = {
  avatarUrl?: string | null;
  style: StyleProp<ViewStyle>;
  width: number;
  height: number;
  color?: string;
};

export const Avatar: FC<AvatarProps> = ({
  avatarUrl,
  style,
  height,
  width,
  color,
}) => {
  const styles = getStyles({ style });
  return (
    <View style={styles.rootStyles}>
      {avatarUrl !== null && avatarUrl?.length && (
        <Image source={{ uri: avatarUrl }} />
      )}
      {avatarUrl === null && (
        <SvgUser width={width} height={height} color={color} />
      )}
    </View>
  );
};
