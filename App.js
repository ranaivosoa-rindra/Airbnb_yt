/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post/index.js';
import {LogBox} from 'react-native';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';

LogBox.ignoreLogs(['Require cycle: src/components/Post/index.js -> src']);
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      <SearchResultsScreen />
    </SafeAreaView>
  );
};

export default App;
