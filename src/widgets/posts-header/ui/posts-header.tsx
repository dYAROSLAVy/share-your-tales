import { Text, View } from "react-native";
import { createStyles } from "./posts-header.styles";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { UserHeaderAvatar } from "@entities/user";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

type PostsHeaderProps = {
  title: string;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
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
