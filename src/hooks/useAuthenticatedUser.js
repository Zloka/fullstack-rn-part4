import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useAuthenticatedUser = () => {
  const { data, loading } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'network-only',
  });

  return { data, loading };
};

export default useAuthenticatedUser;