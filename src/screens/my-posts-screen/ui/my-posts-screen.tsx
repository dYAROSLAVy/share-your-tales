import { Header } from "@widgets/posts-header";
import { PostsAddButton, PostsLayout, useGetMyPosts } from "@entities/posts";
import { PostStatus } from "@widgets/posts-status";
import { PostsList } from "@widgets/posts-list";
import { View } from "react-native";
import { FC } from "react";
import { MainScreenProps } from "@shared/navigation/screen-props";
import { AppRoutes } from "@shared/navigation/app-routes";

export const MyPostsScreen: FC<MainScreenProps> = ({ navigation }) => {
  const { data, fetchMore } = useGetMyPosts({
    variables: { limit: 10, afterCursor: null },
  });

  const handleOnEndReached = () => {
    if (data?.myPosts.pageInfo?.count && data?.myPosts.pageInfo?.count === 10) {
      if (data?.myPosts.pageInfo)
        return fetchMore({
          variables: {
            afterCursor: data.myPosts.pageInfo.afterCursor,
            limit: 10,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newPosts = fetchMoreResult.myPosts.data;

            const pageInfo = fetchMoreResult.myPosts.pageInfo;
            return newPosts?.length
              ? {
                  __typename: "Query",
                  myPosts: {
                    __typename: previousResult.myPosts.__typename,
                    data: [...(previousResult.myPosts.data ?? []), ...newPosts],
                    pageInfo,
                  },
                }
              : previousResult;
          },
        });
    }
  };

  return (
    <PostsLayout>
      <View>
        <Header title={"My posts"} navigation={navigation} />
      </View>
      <PostsList
        isSwipeable
        navigation={navigation}
        onEndReached={handleOnEndReached}
        posts={data?.myPosts.data}
        empty={<PostStatus text="You haven't posted any posts yet" />}
      />
      <PostsAddButton
        onPress={() => navigation.navigate(AppRoutes.CreatePostScreen)}
      />
    </PostsLayout>
  );
};
