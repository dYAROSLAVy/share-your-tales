import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetPostsVariables = Types.Exact<{
  type: Types.PostFilterType;
  afterCursor?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  limit?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export type GetPosts = {
  __typename: "Query";
  posts: {
    __typename: "FindPostsPaginationResponse";
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

export const GetPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PostFilterType" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "afterCursor" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "type" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "afterCursor" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "afterCursor" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "limit" },
                      },
                    },
                  ],
                },
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
 * __useGetPosts__
 *
 * To run a query within a React component, call `useGetPosts` and pass it any options that fit your needs.
 * When your component renders, `useGetPosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPosts({
 *   variables: {
 *      type: // value for 'type'
 *      afterCursor: // value for 'afterCursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPosts(
  baseOptions: Apollo.QueryHookOptions<GetPosts, GetPostsVariables> &
    ({ variables: GetPostsVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPosts, GetPostsVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPosts, GetPostsVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPosts, GetPostsVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPosts, GetPostsVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPosts, GetPostsVariables>(
    GetPostsDocument,
    options
  );
}
export type GetPostsHookResult = ReturnType<typeof useGetPosts>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetPostsSuspenseQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPosts,
  GetPostsVariables
>;
