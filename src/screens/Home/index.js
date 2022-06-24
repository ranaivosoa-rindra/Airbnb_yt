import {View, ImageBackground, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = props => {
  return (
    <View>
      <ImageBackground
        source={'../../../assets/images/wallpaper.jpg'}
        style={styles.image}>
        {/* Search bar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => console.log('Search Btn clicked')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.log('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore neaby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
