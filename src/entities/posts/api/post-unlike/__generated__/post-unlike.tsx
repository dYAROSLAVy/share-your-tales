import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PostUnlikeVariables = Types.Exact<{
  id: Types.Scalars["String"]["input"];
}>;

export type PostUnlike = {
  __typename: "Mutation";
  postUnlike: {
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

export const PostUnlikeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "PostUnlike" },
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
            name: { kind: "Name", value: "postUnlike" },
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
export type PostUnlikeMutationFn = Apollo.MutationFunction<
  PostUnlike,
  PostUnlikeVariables
>;

/**
 * __usePostUnlike__
 *
 * To run a mutation, you first call `usePostUnlike` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUnlike` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUnlike, { data, loading, error }] = usePostUnlike({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostUnlike(
  baseOptions?: Apollo.MutationHookOptions<PostUnlike, PostUnlikeVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostUnlike, PostUnlikeVariables>(
    PostUnlikeDocument,
    options
  );
}
export type PostUnlikeHookResult = ReturnType<typeof usePostUnlike>;
export type PostUnlikeMutationResult = Apollo.MutationResult<PostUnlike>;
export type PostUnlikeMutationOptions = Apollo.BaseMutationOptions<
  PostUnlike,
  PostUnlikeVariables
>;
