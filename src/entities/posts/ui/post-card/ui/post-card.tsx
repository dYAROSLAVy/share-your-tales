import { Image, Text, View } from "react-native";
import { createStyles } from "./post-card.styles";
import { useThemeObject } from "@shared/themes";
import { FC } from "react";
import { SvgHeart } from "@shared/assets/icons/components/heart";
import { formatDate } from "@shared/utils";
import { ButtonIcon } from "@shared/ui/buttons";
import { PostModel } from "@shared/apollo";
import { Swipeable } from "react-native-gesture-handler";

export type PostProps = {
  isSwipeable?: boolean;
  PostDeleteArea?: any;
} & Pick<
  PostModel,
  "title" | "createdAt" | "author" | "likesCount" | "mediaUrl"
>;

export const Post: FC<PostProps> = ({
  title,
  createdAt,
  author,
  PostDeleteArea,
  isSwipeable,
  likesCount,
  mediaUrl,
}) => {
  const styles = useThemeObject(createStyles);

  const date = new Date(createdAt);
  const normalDate = formatDate(Number(date));

  return (
    <Swipeable
      renderRightActions={isSwipeable ? () => PostDeleteArea() : undefined}
    >
      <View style={styles.root}>
        <View style={styles.topInner}>
          <Text style={styles.titleStyles}>{title}</Text>
          <Text style={styles.date}>{normalDate}</Text>
        </View>
        <Image
          source={{ uri: mediaUrl }}
          style={{ minWidth: 335, height: 226 }}
          // onError={({ nativeEvent: {error} }) => console.log(error)}
        />
        <View style={styles.bottomInner}>
          <View style={styles.authorWrap}>
            <Text>
              {author.firstName ? author.firstName : "Anonymous"}
              {author.lastName ? ` ${author.lastName.charAt(0)}.` : ""}
            </Text>
          </View>
          <View>
            <ButtonIcon text={`${likesCount}`}>
              <SvgHeart />
            </ButtonIcon>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
