import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortValue) => {
  const [orderBy, orderDirection] = sortValue;
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
    }
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;