import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import {Button, InputField, LinkButton} from '../../components';

const SignInScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
      <InputField label="Email Address" />
      <InputField label="Password" />
      <LinkButton />
      <Button title="Sign In" />
      <LinkButton />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
  },
});
