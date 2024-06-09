import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsLayout, SortTabs, useGetPosts } from "@entities/posts";
import { PostsList } from "@widgets/posts-list";
import { useUserMe } from "@entities/user";

export const MainScreen = ({ navigation }) => {
  const { loading, error, data } = useGetPosts();

  const { data: userData } = useUserMe();

  return (
    <PostsLayout>
      <View>
        <Header
          title={`Hello ${
            userData?.userMe.firstName !== null &&
            userData?.userMe.firstName?.length
              ? userData?.userMe.firstName
              : "Anonymous"
          }!`}
          navigation={navigation}
        />
        <SortTabs />
      </View>
      <PostsList posts={data?.posts.data} />
    </PostsLayout>
  );
};
