import { Alert, SafeAreaView, Text, View } from "react-native";
import { createStyles } from "./status.style";
import { useThemeObject } from "@shared/themes";
import { ButtonPrimary } from "@shared/ui/buttons";
import { SvgCheckCircle } from "@shared/assets/icons/components/check-circle";
import { AsyncStorageService } from "@entities/account";

export const Status = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topWrap}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>CONGRATS</Text>
        </View>
        <View style={styles.bottomWrap}>
          <SvgCheckCircle width={18} height={18} />
          <Text style={styles.text}>You have been registered</Text>
        </View>
      </View>
      <ButtonPrimary text="Continue" />
    </SafeAreaView>
  );
};
