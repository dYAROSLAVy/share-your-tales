import { ApolloClient, InMemoryCache } from "@apollo/client";

export const CLIENT = new ApolloClient({
  uri: "https://internship-social-media.purrweb.com/graphql",
  cache: new InMemoryCache(),
});
