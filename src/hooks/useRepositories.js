import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortValue, searchKeyword) => {
  const [orderBy, orderDirection] = sortValue;
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    }
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;