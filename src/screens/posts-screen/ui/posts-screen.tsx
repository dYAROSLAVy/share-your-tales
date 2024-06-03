import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { createStyles } from "./posts-screen.style";
import { useThemeObject } from "@shared/themes";
import { SortTabs } from "@entities/post/ui/posts-sort-tabs/ui/sort-tabs";
import { Header } from "@widgets/posts-header";
import { useGetPosts, useUserMe } from "@shared/apollo";
import { Post } from "@widgets/post-card";

export const PostsScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { loading, error, data } = useGetPosts();

  const { data: userData } = useUserMe();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
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
        <View style={styles.postsList}>
          {data?.posts?.data?.map(
            ({ title, likesCount, id, author, mediaUrl, createdAt }) => {
              return (
                <Post
                  title={title}
                  key={id}
                  likesCount={likesCount}
                  author={author}
                  mediaUrl={mediaUrl}
                  createdAt={createdAt}
                />
              );
            }
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
