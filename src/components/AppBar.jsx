import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarRoute from './AppBarRoute';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data } = useAuthenticatedUser();
  const authorizedUser = data?.authorizedUser;
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarRoute to="/" text="Repositories" />
        {authorizedUser ? <AppBarRoute onPress={handleSignOut} text="Sign out" /> : <AppBarRoute to="/signin" text="Sign in" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;