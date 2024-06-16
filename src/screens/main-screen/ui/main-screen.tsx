import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsLayout, SortTabs, useGetPosts } from "@entities/posts";
import { PostsList } from "@widgets/posts-list";
import { useUserMe } from "@entities/user";
import { PostFilterType } from "@shared/apollo";
import { FC, useState } from "react";
import { MainTabProps } from "@shared/navigation/screen-props";

export const MainScreen: FC<MainTabProps> = ({ navigation }) => {
  const TABS = [
    {
      text: "New",
      isLeft: true,
      id: "NEW",
    },
    {
      text: "Top",
      isRight: true,
      id: "TOP",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(TABS[0].id);

  const type = selectedTab as PostFilterType;

  const { loading, data, fetchMore } = useGetPosts({
    variables: { type, limit: 10, afterCursor: null },
  });

  const { data: userData } = useUserMe();

  const selectedTabIndex = TABS.findIndex((tab) => tab.id === selectedTab);

  const createTabClickHandler = (id: string) => () => {
    setSelectedTab(id);
  };

  const handleOnEndReached = () => {
    if (data?.posts.pageInfo)
      return fetchMore({
        variables: {
          afterCursor: data.posts.pageInfo.afterCursor,
          limit: 10,
          type,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPosts = fetchMoreResult.posts.data;

          const pageInfo = fetchMoreResult.posts.pageInfo;
          return newPosts?.length
            ? {
                __typename: "Query",
                posts: {
                  __typename: previousResult.posts.__typename,
                  data: [...(previousResult.posts.data ?? []), ...newPosts],
                  pageInfo,
                },
              }
            : previousResult;
        },
      });
  };

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
        <SortTabs
          tabs={TABS}
          selectedTabIndex={selectedTabIndex}
          createTabClickHandler={createTabClickHandler}
        />
      </View>
      <PostsList
        posts={data?.posts.data}
        navigation={navigation}
        onEndReached={handleOnEndReached}
      />
    </PostsLayout>
  );
};
