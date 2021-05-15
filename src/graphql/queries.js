import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
query Repository($id: ID!, $first: Int, $after: String) {
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
    reviews(first: $first, after: $after) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        totalCount
      }
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
