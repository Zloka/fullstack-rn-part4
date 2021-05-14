import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-native';
import { View, StyleSheet } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';
import useCreateReview from '../hooks/useCreateReview';
import useCreateUser from '../hooks/useCreateUser';
import SignUpForm from './SignUpForm';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const reviewedRepoId = await createReview({ ownerName, repositoryName, rating: Number(rating), text });
      history.push(`/repositories/${reviewedRepoId}`);
    } catch (e) {
      console.warn(e);
    }
  };

  const onSignup = async ({ username, password }) => {
    try {
      await createUser({ username, password });
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/repositories/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUpForm onSubmit={onSignup} />
        </Route>
        <Route path="/review" exact>
          <ReviewForm onSubmit={onSubmit} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;