import React from 'react';
import * as Linking from 'expo-linking';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';
import theme from '../theme';
import RepoNumbers from './RepoNumbers';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 48, width: 48,
    borderRadius: 2,
  },
  container: {
    padding: theme.margins.default,
    backgroundColor: 'white',
  },
  textContainer: {
    marginLeft: theme.margins.default,
    flex: 1,
  },
  bottomMargin: {
    marginBottom: 4
  },
  languageContainer: {
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  topMargin: {
    marginTop: theme.margins.default
  },
  button: {
    height: 40,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  languageText: {
    color: 'white'
  }
});


const RepositoryItem = ({ id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl, isViewingSingleRepo, url }) => {
  const history = useHistory();

  return (
    <TouchableWithoutFeedback onPress={() => history.push(`/repositories/${id}`)}>
      <View style={styles.container} key={id}>
        <View style={styles.flexContainer}>
          <Image style={styles.image} source={{ uri: ownerAvatarUrl }}  />
          <View style={styles.textContainer}>
            <Text style={styles.bottomMargin} fontWeight="bold" fontSize="subheading" testID={`${id}-fullName`}>{fullName}</Text>
            <Text style={styles.bottomMargin} testID={`${id}-description`}>{description}</Text>
            <View style={styles.languageContainer}>
              <Text style={styles.languageText} fontWeight="bold" testID={`${id}-language`}>{language}</Text>
            </View>
          </View>
        </View>
        <RepoNumbers id={id} forksCount={forksCount} stargazersCount={stargazersCount} ratingAverage={ratingAverage} reviewCount={reviewCount} />
        {isViewingSingleRepo
          ? (
              <TouchableWithoutFeedback onPress={() => Linking.openURL(url)} testID="sign-in-button" >
                <View style={[styles.button, styles.topMargin]}>
                  <Text style={styles.languageText} fontWeight="bold">Open in GitHub</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RepositoryItem;