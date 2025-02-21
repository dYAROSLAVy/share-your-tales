import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetPostWithIdVariables = Types.Exact<{
  id: Types.Scalars["String"]["input"];
}>;

export type GetPostWithId = {
  __typename: "Query";
  post: {
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
  };
};

export const GetPostWithIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostWithId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "post" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
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
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gender" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "middleName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "phone" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "deletedAt" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "isLiked" } },
                { kind: "Field", name: { kind: "Name", value: "likesCount" } },
                { kind: "Field", name: { kind: "Name", value: "mediaUrl" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetPostWithId__
 *
 * To run a query within a React component, call `useGetPostWithId` and pass it any options that fit your needs.
 * When your component renders, `useGetPostWithId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostWithId({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostWithId(
  baseOptions: Apollo.QueryHookOptions<GetPostWithId, GetPostWithIdVariables> &
    ({ variables: GetPostWithIdVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostWithId, GetPostWithIdVariables>(
    GetPostWithIdDocument,
    options
  );
}
export function useGetPostWithIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostWithId,
    GetPostWithIdVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostWithId, GetPostWithIdVariables>(
    GetPostWithIdDocument,
    options
  );
}
export function useGetPostWithIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostWithId,
    GetPostWithIdVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPostWithId, GetPostWithIdVariables>(
    GetPostWithIdDocument,
    options
  );
}
export type GetPostWithIdHookResult = ReturnType<typeof useGetPostWithId>;
export type GetPostWithIdLazyQueryHookResult = ReturnType<
  typeof useGetPostWithIdLazyQuery
>;
export type GetPostWithIdSuspenseQueryHookResult = ReturnType<
  typeof useGetPostWithIdSuspenseQuery
>;
export type GetPostWithIdQueryResult = Apollo.QueryResult<
  GetPostWithId,
  GetPostWithIdVariables
>;
