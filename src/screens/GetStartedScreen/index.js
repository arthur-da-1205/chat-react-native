import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBg, Logo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStratedScreen = ({navigation}) => {
  return (
    <ImageBackground source={ImageBg} style={styles.page}>
      <View>
        <Logo />
        <Text style={styles.desc}>
          Konsultasi dengan dokter jadi lebih mudah dan flexible
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStratedScreen;

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  desc: {
    fontSize: 28,
    fontWeigth: '600',
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
