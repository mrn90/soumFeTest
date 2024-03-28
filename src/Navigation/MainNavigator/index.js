import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
const RootStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
