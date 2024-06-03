import { Text, View } from "react-native";
import { createStyles } from "./posts-header.styles";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { UserHeaderAvatar } from "@entities/user";

type PostsHeaderProps = {
  title: string;
  navigation: any;
};

export const PostsHeader: FC<PostsHeaderProps> = ({ title, navigation }) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.root}>
      <Text style={styles.titleStyle}>{title}</Text>
      <UserHeaderAvatar navigation={navigation} />
    </View>
  );
};
