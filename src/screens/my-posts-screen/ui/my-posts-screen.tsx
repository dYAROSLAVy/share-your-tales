import { Header } from "@widgets/posts-header";
import { PostsAddButton, PostsLayout, useGetMyPosts } from "@entities/posts";
import { PostStatus } from "@widgets/posts-status";
import { PostsList } from "@widgets/posts-list";
import { View } from "react-native";
import { useState } from "react";

export const MyPostsScreen = ({ navigation }) => {
  const { loading, error, data } = useGetMyPosts();

  return (
    <PostsLayout>
      <View>
        <Header title={"My posts"} navigation={navigation} />
      </View>
      <PostsList
        isSwipeable
        posts={data?.myPosts.data}
        empty={<PostStatus text="You haven't posted any posts yet" />}
      />
      <PostsAddButton onPress={() => navigation.navigate("CreatePost")} />
    </PostsLayout>
  );
};
