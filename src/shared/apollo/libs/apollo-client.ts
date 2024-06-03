import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { AsyncStorageService } from "@shared/utils";

export const accessTokenReactiveVar = makeVar<string | null>(null);

const customFetch = async (uri: string, options?: any) => {
  const token = await AsyncStorageService.getAccessToken();
  options.headers.authorization = `Bearer ${token}`;

  return fetch(uri, options).then(async (response) => {
    const json = await response.clone().json();
    const error = json?.errors?.[0];

    if (error && error.extensions.code === "UNAUTHENTICATED") {
      await AsyncStorageService.clearStorage();
      accessTokenReactiveVar(null);
      CLIENT.clearStore();
    }

    return response;
  });
};

const httpLink = createHttpLink({
  uri: "https://internship-social-media.purrweb.com/graphql",
  fetch: customFetch as typeof fetch,
});

export const CLIENT = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  name: "social-client",
});
