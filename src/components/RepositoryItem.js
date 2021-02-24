import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View key={id}>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{stargazersCount}</Text>
      <Text>{forksCount}</Text>
      <Text>{reviewCount}</Text>
      <Text>{ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;