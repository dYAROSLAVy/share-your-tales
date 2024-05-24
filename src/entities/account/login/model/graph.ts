import { gql } from "@apollo/client";

export const USER_SING_IN = gql`
  mutation userSignIn($email: String!, $password: String!) {
    userSignIn(input: { email: $email, password: $password }) {
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
