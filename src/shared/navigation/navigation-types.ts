import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ScreenBaseProps<
  PageName extends string,
  NavigatorParams extends ParamListBase
> = {
  navigation: NativeStackNavigationProp<NavigatorParams, PageName>;
  route: RouteProp<NavigatorParams, PageName>;
};

export type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen: any; params?: T[K] | any };
}[keyof T];
