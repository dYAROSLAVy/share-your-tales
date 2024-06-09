import { View } from "react-native";
import { Header } from "@widgets/posts-header";
import { PostsLayout, useGetFavoritesPosts } from "@entities/posts";
import { PostStatus } from "@widgets/posts-status";
import { PostsList } from "@widgets/posts-list";

export const FavoritesScreen = ({ navigation }) => {
  const { loading, error, data } = useGetFavoritesPosts();

  return (
    <PostsLayout>
      <View>
        <Header title={"Favorites"} navigation={navigation} />
      </View>
      <PostsList
        posts={data?.favouritePosts.data}
        empty={
          <PostStatus
            text={"You haven't added anything \nto your favorites yet"}
          />
        }
      />
    </PostsLayout>
  );
};
