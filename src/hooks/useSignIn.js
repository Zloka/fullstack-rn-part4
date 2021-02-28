import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const retVal = await mutate({ variables: { username, password }});
    const { data } = retVal;
    const { authorize } = data;
    const { accessToken } = authorize;
    await authStorage.setAccessToken(accessToken);
    await apolloClient.resetStore();

    return retVal;
  };

  return [signIn, result];
};

export default useSignIn;
