import { SafeAreaView, Text, View } from "react-native";
import { createStyles } from "./full-post-screen.style";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { FullPostScreenProps } from "@shared/navigation/screen-props";
import { FC } from "react";
import { Post, useGetPostWithId } from "@entities/posts";

export const FullPostScreen: FC<FullPostScreenProps> = ({
  navigation,
  route,
}) => {
  const styles = useThemeObject(createStyles);

  const { id } = route.params;

  const { loading, error, data } = useGetPostWithId({
    variables: { id },
  });

  const post = data?.post;

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader navigation={navigation} tile={post?.title} />
      {!loading && (
        <Post
          author={post?.author}
          isBig
          mediaUrl={post?.mediaUrl}
          createdAt={post?.createdAt}
          likesCount={post?.likesCount}
          description={post?.description}
        />
      )}
    </SafeAreaView>
  );
};
