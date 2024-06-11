import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsLayout, SortTabs, useGetPosts } from "@entities/posts";
import { PostsList } from "@widgets/posts-list";
import { useUserMe } from "@entities/user";
import { PostFilterType } from "@shared/apollo";
import { useState } from "react";

export const MainScreen = ({ navigation }) => {
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

  const { loading, error, data } = useGetPosts({
    variables: { type },
  });

  const { data: userData } = useUserMe();

  const selectedTabIndex = TABS.findIndex((tab) => tab.id === selectedTab);

  const createTabClickHandler = (id: string) => () => {
    setSelectedTab(id);
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
      <PostsList posts={data?.posts.data} />
    </PostsLayout>
  );
};
