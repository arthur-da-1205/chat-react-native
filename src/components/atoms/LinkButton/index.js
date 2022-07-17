import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/COLORS';

const LinkButton = ({label, size, align}) => {
  return (
    <View>
      <Text style={styles.label(size, align)}>{label}</Text>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  label: (size, align) => ({
    fontSize: size,
    color: COLORS.text.secondary,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
