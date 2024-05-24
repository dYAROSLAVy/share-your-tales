import { gql } from "@apollo/client";

export const USER_SING_UP = gql`
  mutation userSignUp(
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    userSignUp(
      input: {
        email: $email
        password: $password
        passwordConfirm: $passwordConfirm
      }
    ) {
      problem {
        message
      }
      token
      user {
        avatarUrl
        birthDate
        country
        createdAt
        deletedAt
        email
        firstName
        lastName
        gender
        id
        lastName
        middleName
        phone
        email
        updatedAt
      }
    }
  }
`;
