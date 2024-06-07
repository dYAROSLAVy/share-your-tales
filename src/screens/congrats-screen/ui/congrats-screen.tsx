import { StatusText, StatusTitle } from "@entities/status";
import { SvgCheckCircle } from "@shared/assets/icons/components/check-circle";
import { ButtonPrimary } from "@shared/ui/buttons";
import { SafeAreaView, View } from "react-native";
import { createStyles } from "./congrats-screen.style";
import { useThemeObject } from "@shared/themes";

export const CongratsScreen = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topWrap}>
        <StatusTitle title={"CONGRATS"} />
        <View style={styles.bottomWrap}>
          <SvgCheckCircle width={18} height={18} />
          <StatusText text="You have been registered"/>
        </View>
      </View>
      <ButtonPrimary
        text="Continue"
        onPress={() =>
          navigation.navigate("MainStack", { screen: "MainScreen" })
        }
      />
    </SafeAreaView>
  );
};
