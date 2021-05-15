import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const SortMenu = ({ setSortOption, sortOption, search, setSearch }) => {
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
      <Picker
          selectedValue={sortOption}
          onValueChange={(itemValue) =>
            setSortOption(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
    
  );
};

export default SortMenu;