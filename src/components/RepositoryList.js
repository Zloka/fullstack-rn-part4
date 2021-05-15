import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SortMenu from './SortMenu';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const sortMapping = {
  latest: ['CREATED_AT', 'DESC'],
  highest: ['RATING_AVERAGE', 'DESC'],
  lowest: ['RATING_AVERAGE', 'ASC'],
};

export const RepositoryListContainer = ({ repositories, setSortOption, sortOption }) => {
   // Get the nodes from the edges array
   const repositoryNodes = repositories
   ? repositories.edges.map(edge => edge.node)
   : [];

 return (
   <FlatList
     data={repositoryNodes}
     ItemSeparatorComponent={ItemSeparator}
     renderItem={({item}) => <RepositoryItem {...item} />}
     ListHeaderComponent={<SortMenu setSortOption={setSortOption} sortOption={sortOption} />}
   />
 );
};

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState('latest');
  const sortValue = sortMapping[sortOption];
  const { repositories } = useRepositories(sortValue);

  return <RepositoryListContainer repositories={repositories} setSortOption={setSortOption} sortOption={sortOption} />;
};

export default RepositoryList;