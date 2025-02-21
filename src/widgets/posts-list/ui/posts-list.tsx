import { FlatList } from "react-native";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { createStyles } from "./posts-list.style";
import { PostModel } from "@shared/apollo";
import {
  GetFavoritesPosts,
  GetMyPosts,
  GetPosts,
  Post,
  PostDeleteArea,
} from "@entities/posts";
import {
  usePostDeleteSwipe,
  usePostLikePress,
  usePostUnlikePress,
} from "@features/post";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { ApolloQueryResult } from "@apollo/client";

type PostsListProps = {
  posts?: PostModel[] | null;
  isSwipeable?: boolean;
  empty?: React.JSX.Element;
  navigation?: NativeStackNavigationProp<ParamListBase, string>;
  onEndReached?: () =>
    | Promise<ApolloQueryResult<GetMyPosts | GetPosts | GetFavoritesPosts>>
    | undefined;
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
              deleteText: styles.deleteText,
              deleteBtn: styles.deleteBtn,
              deleteInner: styles.deleteInner,
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
