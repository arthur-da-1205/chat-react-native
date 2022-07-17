import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets';
import {Gap} from '../../atoms';
import {COLORS} from '../../../constants/COLORS';

const Header = () => {
  return (
    <View style={styles.container}>
      <ArrowBack />
      <Text style={styles.title}>Header</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.text.default,
  },
});
