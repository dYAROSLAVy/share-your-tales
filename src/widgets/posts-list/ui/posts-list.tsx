import { FlatList } from "react-native";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { createStyles } from "./posts-list.style";
import { PostModel } from "@shared/apollo";
import { Post, PostDeleteArea } from "@entities/posts";
import { usePostDeleteSwipe } from "@features/post";

type PostsListProps = {
  posts?: PostModel[] | null;
  isSwipeable?: boolean;
  empty?: React.JSX.Element;
  navigation?: any;
};

export const PostsList: FC<PostsListProps> = ({
  posts,
  navigation,
  empty,
  isSwipeable,
}) => {
  const styles = useThemeObject(createStyles);

  const { onDeleteClick } = usePostDeleteSwipe();

  return (
    <FlatList
      contentContainerStyle={styles.postsList}
      ListEmptyComponent={empty}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          id={item.id}
          navigation={navigation}
          PostDeleteArea={() => PostDeleteArea({ id: item.id, onDeleteClick })}
          isSwipeable={isSwipeable}
          title={item.title}
          likesCount={item.likesCount}
          author={item.author}
          mediaUrl={item.mediaUrl}
          createdAt={item.createdAt}
          description={item.description}
        />
      )}
    />
  );
};
