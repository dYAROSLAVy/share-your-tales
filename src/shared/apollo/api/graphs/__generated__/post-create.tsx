import * as Types from "../../../model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PostCreateVariables = Types.Exact<{
  description: Types.Scalars["String"]["input"];
  mediaUrl: Types.Scalars["String"]["input"];
  title: Types.Scalars["String"]["input"];
}>;

export type PostCreate = {
  __typename: "Mutation";
  postCreate: {
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

export const PostCreateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "PostCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "mediaUrl" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
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
            name: { kind: "Name", value: "postCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "mediaUrl" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "mediaUrl" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
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
export type PostCreateMutationFn = Apollo.MutationFunction<
  PostCreate,
  PostCreateVariables
>;

/**
 * __usePostCreate__
 *
 * To run a mutation, you first call `usePostCreate` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreate` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreate, { data, loading, error }] = usePostCreate({
 *   variables: {
 *      description: // value for 'description'
 *      mediaUrl: // value for 'mediaUrl'
 *      title: // value for 'title'
 *   },
 * });
 */
export function usePostCreate(
  baseOptions?: Apollo.MutationHookOptions<PostCreate, PostCreateVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostCreate, PostCreateVariables>(
    PostCreateDocument,
    options
  );
}
export type PostCreateHookResult = ReturnType<typeof usePostCreate>;
export type PostCreateMutationResult = Apollo.MutationResult<PostCreate>;
export type PostCreateMutationOptions = Apollo.BaseMutationOptions<
  PostCreate,
  PostCreateVariables
>;
