import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "./registration-screen.styles";
import { ButtonPrimary } from "@shared/ui/buttons/button-primary/button-primary";

export const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topInner}>
        <Text style={styles.title}>Join us</Text>
        <Text style={styles.text}>You will be able to fully communicate</Text>
      </View>
      <View style={styles.bottomInner}>
        <View style={styles.registerWrap}>
          <Text style={styles.text}>Already have an account?</Text>
          <Button title="Log in" onPress={() => navigation.goBack()}></Button>
        </View>
        <ButtonPrimary text="Continue" />
      </View>
    </SafeAreaView>
  );
};
