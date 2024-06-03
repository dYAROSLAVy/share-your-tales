import { Image, Text, View } from "react-native";
import { createStyles } from "./post-card.styles";
import { useThemeObject } from "@shared/themes";
import { FC } from "react";
import { SvgHeart } from "@shared/assets/icons/components/heart";
import { formatDate } from "@shared/utils";
import { PostModel } from "@shared/apollo/model/api-types";
import { ButtonIcon } from "@shared/ui/buttons";

export const Post: FC<PostProps> = ({
  title,
  createdAt,
  author,
  likesCount,
  mediaUrl,
}) => {
  const styles = useThemeObject(createStyles);

  const date = new Date(createdAt);
  const normalDate = formatDate(Number(date));

  return (
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
  );
};

export type PostProps = Pick<
  PostModel,
  "title" | "createdAt" | "author" | "likesCount" | "mediaUrl"
>;
