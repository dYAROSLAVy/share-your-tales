import { AppRoutes } from "./app-routes";
import { AuthStackParams, MainStackParams } from "./navigation-params";
import { ScreenBaseProps } from "./navigation-types";

export type SignInScreenProps = ScreenBaseProps<
  AppRoutes.SignInScreen,
  AuthStackParams
>;

export type SignUpScreenProps = ScreenBaseProps<
  AppRoutes.SignUpScreen,
  AuthStackParams
>;

export type MainScreenProps = ScreenBaseProps<
  AppRoutes.SignUpScreen,
  MainStackParams
>;

export type CongratsScreenProps = ScreenBaseProps<
  AppRoutes.CongratsScreen,
  MainStackParams
>;

export type CreatePostScreenProps = ScreenBaseProps<
  AppRoutes.CreatePostScreen,
  MainStackParams
>;

export type ProfileScreenProps = ScreenBaseProps<
  AppRoutes.ProfileScreen,
  MainStackParams
>;

export type FullPostScreenProps = ScreenBaseProps<
  AppRoutes.FullPostScreen,
  MainStackParams
>;

export type FavoritesScreenProps = ScreenBaseProps<
  AppRoutes.FavoritesScreen,
  MainStackParams
>;
