import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.text}>DoktorKu</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
    color: '#112340',
  },
});
