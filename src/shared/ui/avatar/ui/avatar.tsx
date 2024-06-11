import { SvgUser } from "@shared/assets/icons/components/user";
import { FC } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import { getStyles } from "./avatar.styles";

export type AvatarProps = {
  avatarUrl?: string | null;
  style: StyleProp<ViewStyle>;
  width: number;
  height: number;
  widthImg: number;
  heightImg: number;
  color?: string;
};

export const Avatar: FC<AvatarProps> = ({
  avatarUrl,
  style,
  height,
  heightImg,
  widthImg,
  width,
  color,
}) => {
  const styles = getStyles({ style });
  return (
    <View style={styles.rootStyles}>
      {avatarUrl !== null && avatarUrl?.length && (
        <Image
          source={{ uri: avatarUrl }}
          width={widthImg}
          height={heightImg}
          style={{ borderRadius: widthImg / 2 }}
        />
      )}
      {avatarUrl === null && (
        <SvgUser width={width} height={height} color={color} />
      )}
    </View>
  );
};
