import { Image, Text, TouchableHighlight, View } from "react-native";
import { useThemeObject } from "@shared/themes";
import { FC } from "react";
import { SvgHeart } from "@shared/assets/icons/components/heart";
import { formatDate } from "@shared/utils";
import { ButtonIcon } from "@shared/ui/buttons";
import { PostModel } from "@shared/apollo";
import { Swipeable } from "react-native-gesture-handler";
import { SvgShare } from "@shared/assets/icons/components/share";
import { Avatar } from "@shared/ui/avatar";
import { getStyles } from "./post-card.styles";

export type PostProps = {
  isSwipeable?: boolean;
  isBig?: boolean;
  PostDeleteArea?: any;
  navigation?: any;
} & Pick<
  PostModel,
  | "title"
  | "createdAt"
  | "author"
  | "likesCount"
  | "mediaUrl"
  | "id"
  | "description"
>;

export const Post: FC<PostProps> = ({
  title,
  createdAt,
  navigation,
  isBig,
  author,
  PostDeleteArea,
  description,
  isSwipeable,
  id,
  likesCount,
  mediaUrl,
}) => {
  const styles = getStyles({
    isBig,
  });

  const date = new Date(createdAt);
  const normalDate = formatDate(Number(date));

  return (
    <Swipeable
      renderRightActions={isSwipeable ? () => PostDeleteArea() : undefined}
    >
      <TouchableHighlight
        onPress={
          navigation
            ? () =>
                navigation?.navigate("MainStack", {
                  screen: "FullPost",
                  params: { id },
                })
            : undefined
        }
      >
        <View style={styles.root}>
          <View style={styles.topInner}>
            {!isBig && <Text style={styles.titleStyles}>{title}</Text>}
            <Text style={styles.date}>{normalDate}</Text>
          </View>
          <Image
            source={{ uri: mediaUrl }}
            style={styles.imageStyles}
            // onError={({ nativeEvent: {error} }) => console.log(error)}
          />
          {isBig && <Text>{description}</Text>}
          <View style={styles.bottomInner}>
            <View style={styles.authorWrap}>
              <Avatar
                style={styles.avatarStyles}
                widthImg={24}
                heightImg={24}
                avatarUrl={author.avatarUrl}
                width={16}
                height={22}
              />
              <Text>
                {author.firstName ? author.firstName : "Anonymous"}
                {author.lastName ? ` ${author.lastName.charAt(0)}.` : ""}
              </Text>
            </View>
            <View style={styles.interactionWrap}>
              <ButtonIcon style={styles.btnLike} text={`${likesCount}`}>
                <SvgHeart />
              </ButtonIcon>
              <ButtonIcon style={styles.btnShared}>
                <SvgShare />
              </ButtonIcon>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
