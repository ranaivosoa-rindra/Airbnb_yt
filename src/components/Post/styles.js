import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    // height: 100,
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
  },
  description: {
    color: 'black',
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
  },
  totalPrice: {
    textDecorationLine: 'underline',
  },
});

export default styles;
