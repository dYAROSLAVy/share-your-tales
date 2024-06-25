import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsLayout, useGetFavoritesPosts } from "@entities/posts";
import { PostStatus } from "@widgets/posts-status";
import { PostsList } from "@widgets/posts-list";
import { FavoritesScreenProps } from "@shared/navigation/screen-props";
import { FC } from "react";

export const FavoritesScreen: FC<FavoritesScreenProps> = ({ navigation }) => {
  const { data, fetchMore } = useGetFavoritesPosts({
    variables: { limit: 10, afterCursor: null },
  });

  const handleOnEndReached = () => {
    if (
      data?.favouritePosts.pageInfo?.count &&
      data?.favouritePosts.pageInfo?.count === 10
    ) {
      if (data?.favouritePosts.pageInfo)
        return fetchMore({
          variables: {
            afterCursor: data.favouritePosts.pageInfo.afterCursor,
            limit: 10,
          },
          updateQuery: (previousQueryResult, { fetchMoreResult }) => {
            const newPosts = fetchMoreResult.favouritePosts.data;

            const pageInfo = fetchMoreResult.favouritePosts.pageInfo;
            return newPosts?.length
              ? {
                  __typename: "Query",
                  favouritePosts: {
                    __typename: previousQueryResult.favouritePosts.__typename,
                    data: [
                      ...(previousQueryResult.favouritePosts.data ?? []),
                      ...newPosts,
                    ],
                    pageInfo,
                  },
                }
              : previousQueryResult;
          },
        });
    }
  };

  return (
    <PostsLayout>
      <View>
        <Header title={"Favorites"} navigation={navigation} />
      </View>
      <PostsList
        posts={data?.favouritePosts.data}
        navigation={navigation}
        onEndReached={handleOnEndReached}
        empty={
          <PostStatus
            text={"You haven't added anything \nto your favorites yet"}
          />
        }
      />
    </PostsLayout>
  );
};
