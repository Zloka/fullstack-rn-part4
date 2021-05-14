import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
mutation signIn(
  $username: String!
  $password: String!
  ) {
  authorize(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`;

export const CREATE_REVIEW = gql`
mutation reviewRepo(
  $repositoryName: String!
  $ownerName: String!
  $rating: Int!
  $text: String
  ) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text  }) {
    repository {
      id
    }
  }
}
`;

export const CREATE_USER = gql`
mutation signUp(
  $username: String!
  $password: String!
  ) {
  createUser(user: { username: $username, password: $password }) {
    id
    username
  }
}
`;
