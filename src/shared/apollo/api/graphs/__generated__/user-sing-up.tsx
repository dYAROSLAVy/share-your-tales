import * as Types from "../../../model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserSignUpVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
  passwordConfirm: Types.Scalars["String"]["input"];
}>;

export type UserSignUp = {
  __typename: "Mutation";
  userSignUp: {
    __typename: "SignUpResponse";
    token?: string | null;
    problem?: { __typename: "EmailAlreadyUsedProblem"; message: string } | null;
    user?: {
      __typename: "UserModel";
      avatarUrl?: string | null;
      birthDate?: string | null;
      country?: string | null;
      createdAt: string;
      deletedAt?: string | null;
      email: string;
      firstName?: string | null;
      lastName?: string | null;
      gender?: string | null;
      id: string;
      middleName?: string | null;
      phone?: string | null;
      updatedAt: string;
    } | null;
  };
};

export const UserSignUpDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UserSignUp" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
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
            name: { kind: "Name", value: "password" },
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
            name: { kind: "Name", value: "passwordConfirm" },
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
            name: { kind: "Name", value: "userSignUp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "passwordConfirm" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "passwordConfirm" },
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
                  name: { kind: "Name", value: "problem" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
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
                        name: { kind: "Name", value: "lastName" },
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
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
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
export type UserSignUpMutationFn = Apollo.MutationFunction<
  UserSignUp,
  UserSignUpVariables
>;

/**
 * __useUserSignUp__
 *
 * To run a mutation, you first call `useUserSignUp` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignUp` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUp, { data, loading, error }] = useUserSignUp({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useUserSignUp(
  baseOptions?: Apollo.MutationHookOptions<UserSignUp, UserSignUpVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserSignUp, UserSignUpVariables>(
    UserSignUpDocument,
    options
  );
}
export type UserSignUpHookResult = ReturnType<typeof useUserSignUp>;
export type UserSignUpMutationResult = Apollo.MutationResult<UserSignUp>;
export type UserSignUpMutationOptions = Apollo.BaseMutationOptions<
  UserSignUp,
  UserSignUpVariables
>;
