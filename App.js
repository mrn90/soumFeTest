import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigation from './src/Navigation';
import { colors } from './src/utils/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});



export default App;
