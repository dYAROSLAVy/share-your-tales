import * as Types from "../../../../../shared/apollo/model/api-types";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserEditProfileVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  country?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  avatarUrl?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  birthDate?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  firstName?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  gender?: Types.InputMaybe<Types.GenderType>;
  lastName?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  middleName?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  phone?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type UserEditProfile = {
  __typename: "Mutation";
  userEditProfile: {
    __typename: "EditProfileResponse";
    problem?:
      | { __typename: "EmailAlreadyUsedProblem" }
      | { __typename: "PhoneAlreadyUsedProblem" }
      | null;
    user?: {
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
    } | null;
  };
};

export const UserEditProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UserEditProfile" },
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
            name: { kind: "Name", value: "country" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "avatarUrl" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "birthDate" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "gender" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "GenderType" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "middleName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phone" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userEditProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "country" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "country" },
                      },
                    },
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
                      name: { kind: "Name", value: "avatarUrl" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "avatarUrl" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "birthDate" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "birthDate" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "firstName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "firstName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "gender" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "gender" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "lastName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "lastName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "middleName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "middleName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phone" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phone" },
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
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
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
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type UserEditProfileMutationFn = Apollo.MutationFunction<
  UserEditProfile,
  UserEditProfileVariables
>;

/**
 * __useUserEditProfile__
 *
 * To run a mutation, you first call `useUserEditProfile` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserEditProfile` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userEditProfile, { data, loading, error }] = useUserEditProfile({
 *   variables: {
 *      email: // value for 'email'
 *      country: // value for 'country'
 *      avatarUrl: // value for 'avatarUrl'
 *      birthDate: // value for 'birthDate'
 *      firstName: // value for 'firstName'
 *      gender: // value for 'gender'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useUserEditProfile(
  baseOptions?: Apollo.MutationHookOptions<
    UserEditProfile,
    UserEditProfileVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserEditProfile, UserEditProfileVariables>(
    UserEditProfileDocument,
    options
  );
}
export type UserEditProfileHookResult = ReturnType<typeof useUserEditProfile>;
export type UserEditProfileMutationResult =
  Apollo.MutationResult<UserEditProfile>;
export type UserEditProfileMutationOptions = Apollo.BaseMutationOptions<
  UserEditProfile,
  UserEditProfileVariables
>;
