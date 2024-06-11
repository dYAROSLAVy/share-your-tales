import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetMyPostsVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyPosts = {
  __typename: "Query";
  myPosts: {
    __typename: "FindMyPostsPaginationResponse";
    data?: Array<{
      __typename: "PostModel";
      authorId: string;
      createdAt: string;
      deletedAt?: string | null;
      description: string;
      id: string;
      isLiked: boolean;
      likesCount: number;
      mediaUrl: string;
      title: string;
      updatedAt: string;
      author: {
        __typename: "UserModel";
        avatarUrl?: string | null;
        birthDate?: string | null;
        country?: string | null;
        createdAt: string;
        deletedAt?: string | null;
        email: string;
        firstName?: string | null;
        gender?: string | null;
        id: string;
        lastName?: string | null;
        middleName?: string | null;
        phone?: string | null;
        updatedAt: string;
      };
    }> | null;
    pageInfo?: {
      __typename: "PageAfterCursorInfo";
      afterCursor?: string | null;
      count: number;
      perPage: number;
    } | null;
  };
};

export const GetMyPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMyPosts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myPosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "ObjectValue", fields: [] },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatarUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "birthDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "country" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "deletedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "gender" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "middleName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "phone" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "authorId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "deletedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isLiked" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "likesCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mediaUrl" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "afterCursor" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "perPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetMyPosts__
 *
 * To run a query within a React component, call `useGetMyPosts` and pass it any options that fit your needs.
 * When your component renders, `useGetMyPosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyPosts({
 *   variables: {
 *   },
 * });
 */
export function useGetMyPosts(
  baseOptions?: Apollo.QueryHookOptions<GetMyPosts, GetMyPostsVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyPosts, GetMyPostsVariables>(
    GetMyPostsDocument,
    options
  );
}
export function useGetMyPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMyPosts, GetMyPostsVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyPosts, GetMyPostsVariables>(
    GetMyPostsDocument,
    options
  );
}
export function useGetMyPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyPosts, GetMyPostsVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetMyPosts, GetMyPostsVariables>(
    GetMyPostsDocument,
    options
  );
}
export type GetMyPostsHookResult = ReturnType<typeof useGetMyPosts>;
export type GetMyPostsLazyQueryHookResult = ReturnType<
  typeof useGetMyPostsLazyQuery
>;
export type GetMyPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetMyPostsSuspenseQuery
>;
export type GetMyPostsQueryResult = Apollo.QueryResult<
  GetMyPosts,
  GetMyPostsVariables
>;
