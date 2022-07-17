import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets';
import {COLORS} from '../../constants/COLORS';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStartedScreen');
    }, 2500);
  }, []);

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
    backgroundColor: COLORS.white,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
    color: COLORS.secondary,
  },
});
