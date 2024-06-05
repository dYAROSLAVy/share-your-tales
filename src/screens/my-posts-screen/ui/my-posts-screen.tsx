import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsAddButton, PostsLayout } from "@entities/posts";
import { PostStatus } from "@widgets/posts-status";
import { PostsList } from "@widgets/posts-list";
import { useGetMyPosts } from "@shared/apollo";

export const MyPostsScreen = ({ navigation }) => {
  const { loading, error, data } = useGetMyPosts();

  return (
    <PostsLayout>
      <View>
        <Header title={"My posts"} navigation={navigation} />
      </View>
      <PostsList
        posts={data?.myPosts.data}
        empty={<PostStatus text="You haven't posted any posts yet" />}
      />
      <PostsAddButton onPress={() => navigation.navigate("CreatePost")} />
    </PostsLayout>
  );
};
