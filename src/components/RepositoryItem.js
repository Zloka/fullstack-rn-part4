import React from 'react';
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
  languageText: {
    color: 'white'
  }
});


const RepositoryItem = ({ id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RepositoryItem;