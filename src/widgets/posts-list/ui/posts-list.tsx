import { FlatList } from "react-native";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { createStyles } from "./posts-list.style";
import { PostModel } from "@shared/apollo";
import { Post, PostDeleteArea } from "@entities/posts";
import {
  usePostDeleteSwipe,
  usePostLikePress,
  usePostUnlikePress,
} from "@features/post";

type PostsListProps = {
  posts?: PostModel[] | null;
  isSwipeable?: boolean;
  empty?: React.JSX.Element;
  navigation?: any;
  onEndReached: any;
};

export const PostsList: FC<PostsListProps> = ({
  posts,
  navigation,
  onEndReached,
  empty,
  isSwipeable,
}) => {
  const styles = useThemeObject(createStyles);

  const { onDeleteClick } = usePostDeleteSwipe();

  const { onLikeClick } = usePostLikePress();

  const { onUnlikeClick } = usePostUnlikePress();

  return (
    <FlatList
      contentContainerStyle={styles.postsList}
      removeClippedSubviews
      onEndReached={onEndReached}
      onEndReachedThreshold={1}
      ListEmptyComponent={empty}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          id={item.id}
          navigation={navigation}
          PostDeleteArea={() =>
            PostDeleteArea({
              id: item.id,
              onDeleteClick,
              styles: styles.deleteStyles,
            })
          }
          isSwipeable={isSwipeable}
          title={item.title}
          likesCount={item.likesCount}
          author={item.author}
          mediaUrl={item.mediaUrl}
          createdAt={item.createdAt}
          description={item.description}
          isLiked={item.isLiked}
          postUnlike={() => onUnlikeClick(item.id)}
          postLike={() => onLikeClick(item.id)}
        />
      )}
    />
  );
};
