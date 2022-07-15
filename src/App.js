import {View, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  return (
    <View style={styles.page}>
      <SplashScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {flex: 1},
});
