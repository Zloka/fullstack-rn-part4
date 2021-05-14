import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
  repositories {
     edges {
      node {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
      }
    }
  }
}
`;

export const GET_AUTHENTICATED_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;

export const GET_SINGLE_REPOSITORY = gql`
query Repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    url
  }
}
`;
