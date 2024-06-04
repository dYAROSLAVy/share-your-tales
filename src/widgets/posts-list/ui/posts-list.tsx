import { FlatList } from "react-native";
import { useThemeObject } from "@shared/themes";
import React, { FC } from "react";
import { createStyles } from "./posts-list.style";
import { PostModel } from "@shared/apollo";
import { Post } from "@entities/posts";

type PostsListProps = {
  posts?: PostModel[] | null;
  empty?: React.JSX.Element;
};

export const PostsList: FC<PostsListProps> = ({ posts, empty }) => {
  const styles = useThemeObject(createStyles);

  return (
    <FlatList
      contentContainerStyle={styles.postsList}
      ListEmptyComponent={empty}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          title={item.title}
          likesCount={item.likesCount}
          author={item.author}
          mediaUrl={item.mediaUrl}
          createdAt={item.createdAt}
        />
      )}
    />
  );
};
