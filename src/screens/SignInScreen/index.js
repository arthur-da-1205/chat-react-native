import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import {Button, Gap, InputField, LinkButton} from '../../components';
import {COLORS} from '../../constants/COLORS';

const SignInScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
      <InputField label="Email Address" />
      <Gap height={24} />
      <InputField label="Password" />
      <Gap height={10} />
      <LinkButton label="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <LinkButton label="Create New Account" size={16} align="center" />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.secondary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
