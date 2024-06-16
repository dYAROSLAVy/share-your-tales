import { AppRoutes } from "./app-routes";
import { SubNavigator } from "./navigation-types";

export type RootStackParams = {
  [AppRoutes.AuthStack]: SubNavigator<AuthStackParams>;
  [AppRoutes.MainStack]: SubNavigator<MainStackParams>;
};

export type AuthStackParams = RootStackParams & {
  [AppRoutes.SignInScreen]: undefined;
  [AppRoutes.SignUpScreen]: undefined;
};

export type MainStackParams = RootStackParams & {
  [AppRoutes.MainScreen]: undefined;
  [AppRoutes.CongratsScreen]: undefined;
  [AppRoutes.CreatePostScreen]: undefined;
  [AppRoutes.ProfileScreen]: undefined;
  [AppRoutes.FullPostScreen]: { id: string };
  [AppRoutes.FavoritesScreen]: undefined;
  [AppRoutes.MainTab]: undefined;
};
