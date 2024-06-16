import { SafeAreaView, Text, View } from "react-native";
import { createStyles } from "./full-post-screen.style";
import { useThemeObject } from "@shared/themes";
import { NavigationHeader } from "@entities/navigation";
import { FullPostScreenProps } from "@shared/navigation/screen-props";
import { FC } from "react";
import { Post, useGetPostWithId } from "@entities/posts";
import { usePostLikePress, usePostUnlikePress } from "@features/post";

export const FullPostScreen: FC<FullPostScreenProps> = ({
  navigation,
  route,
}) => {
  const styles = useThemeObject(createStyles);

  const { id } = route.params;

  const { loading, data } = useGetPostWithId({
    variables: { id },
  });

  const post = data?.post;

  const { onLikeClick } = usePostLikePress();

  const { onUnlikeClick } = usePostUnlikePress();

  return (
    <SafeAreaView style={styles.root}>
      <NavigationHeader navigation={navigation} tile={post?.title} isFullPost />
      {!loading && post && (
        <Post
          author={post.author}
          isLiked={post.isLiked}
          isBig
          mediaUrl={post.mediaUrl}
          createdAt={post.createdAt}
          likesCount={post.likesCount}
          description={post.description}
          id={post.id}
          postLike={() => onLikeClick(post.id)}
          postUnlike={() => onUnlikeClick(post.id)}
          title={post.title}
        />
      )}
    </SafeAreaView>
  );
};
