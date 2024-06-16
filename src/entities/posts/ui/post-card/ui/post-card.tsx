import {
  Alert,
  Image,
  Share,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useTheme, useThemeObject } from "@shared/themes";
import { FC } from "react";
import { SvgHeart } from "@shared/assets/icons/components/heart";
import { formatDate } from "@shared/utils";
import { ButtonIcon } from "@shared/ui/buttons";
import { PostModel } from "@shared/apollo";
import { Swipeable } from "react-native-gesture-handler";
import { SvgShare } from "@shared/assets/icons/components/share";
import { Avatar } from "@shared/ui/avatar";
import { getStyles } from "./post-card.styles";
import { linking } from "@shared/navigation/linking";

export type PostProps = {
  isSwipeable?: boolean;
  isBig?: boolean;
  PostDeleteArea?: any;
  postLike: () => void;
  postUnlike: () => void;
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
  | "isLiked"
>;

export const Post: FC<PostProps> = ({
  title,
  createdAt,
  navigation,
  isBig,
  author,
  postLike,
  postUnlike,
  PostDeleteArea,
  description,
  isSwipeable,
  id,
  likesCount,
  isLiked,
  mediaUrl,
}) => {
  const styles = getStyles({
    isBig,
  });

  const { theme } = useTheme();

  const date = new Date(createdAt);
  const normalDate = formatDate(Number(date));

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${linking.prefixes[0]}main/post/${id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

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
          {isBig && <Text style={styles.textStyles}>{description}</Text>}
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
              <Text style={styles.author}>
                {author.firstName ? author.firstName : "Anonymous"}
                {author.lastName ? ` ${author.lastName.charAt(0)}.` : ""}
              </Text>
            </View>
            <View style={styles.interactionWrap}>
              <ButtonIcon
                onPress={isLiked ? () => postUnlike() : () => postLike()}
                style={styles.btnLike}
                text={`${likesCount}`}
              >
                <SvgHeart
                  color={isLiked ? theme.color.primary : theme.color.darkest}
                />
              </ButtonIcon>
              <ButtonIcon style={styles.btnShared} onPress={onShare}>
                <SvgShare color={theme.color.darkest} />
              </ButtonIcon>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
