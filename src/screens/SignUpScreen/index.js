import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, InputField} from '../../components';
import {COLORS} from '../../constants/COLORS';

const SignUpScreen = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <InputField label="Full Name" />
        <Gap height={24} />
        <InputField label="Job Title" />
        <Gap height={24} />
        <InputField label="Email Address" />
        <Gap height={24} />
        <InputField label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  content: {padding: 40, paddingTop: 0},
});
