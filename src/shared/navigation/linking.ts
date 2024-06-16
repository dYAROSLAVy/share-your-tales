import { AppRoutes } from "./app-routes";
const config = {
  screens: {
    [AppRoutes.MainStack]: {
      path: "main",
      screens: {
        [AppRoutes.ProfileScreen]: "profile",
        [AppRoutes.CreatePostScreen]: "new-post",
        [AppRoutes.FullPostScreen]: "post/:id?",
      },
    },
  },
};

export const linking = {
  prefixes: ["share-your-tale://"],
  config,
};
