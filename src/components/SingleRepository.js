import React from 'react';
import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewItemContainer: {
    paddingVertical: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 8
  },
  topMargin: {
    marginTop: 4,
  },
  ratingContainer: {
    marginLeft: 8,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: '#0366d6',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ReviewItem = ({ review }) => {
  const { rating, text, user, createdAt } = review;
  const { username } = user;
  const year = createdAt.slice(0, 4);
  const month = createdAt.slice(5, 7);
  const day = createdAt.slice(8, 10);
  const dateString = `${day}.${month}.${year}`;
  return (
    <View style={styles.reviewItemContainer}>
      <View style={styles.ratingContainer}>
        <Text>{rating}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold" fontSize="subheading">{username}</Text>
        <Text style={styles.topMargin} color="textSecondary">{dateString}</Text>
        <Text style={styles.topMargin}>{text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const reviews = repository !== undefined ? repository.reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem isViewingSingleRepo {...repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;