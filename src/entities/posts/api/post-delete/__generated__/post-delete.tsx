import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PostDeleteVariables = Types.Exact<{
  id: Types.Scalars["String"]["input"];
}>;

export type PostDelete = {
  __typename: "Mutation";
  postDelete: { __typename: "DeletePostResponse"; id: string; ok: boolean };
};

export const PostDeleteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "PostDelete" },
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
            name: { kind: "Name", value: "postDelete" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "ok" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type PostDeleteMutationFn = Apollo.MutationFunction<
  PostDelete,
  PostDeleteVariables
>;

/**
 * __usePostDelete__
 *
 * To run a mutation, you first call `usePostDelete` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDelete` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDelete, { data, loading, error }] = usePostDelete({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostDelete(
  baseOptions?: Apollo.MutationHookOptions<PostDelete, PostDeleteVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostDelete, PostDeleteVariables>(
    PostDeleteDocument,
    options
  );
}
export type PostDeleteHookResult = ReturnType<typeof usePostDelete>;
export type PostDeleteMutationResult = Apollo.MutationResult<PostDelete>;
export type PostDeleteMutationOptions = Apollo.BaseMutationOptions<
  PostDelete,
  PostDeleteVariables
>;
