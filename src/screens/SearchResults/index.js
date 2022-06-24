import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <FlatList
      data={feed}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={true}
      keyExtractor={item => item.id}
    />
  );
};

export default SearchResultsScreen;
