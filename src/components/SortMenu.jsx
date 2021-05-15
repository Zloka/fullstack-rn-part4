import React from 'react';
import {View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SortMenu = ({ setSortOption, sortOption }) => {
  return (
    <View>
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