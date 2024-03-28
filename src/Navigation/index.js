import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './MainNavigator';
const Navigation = props => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};
export default Navigation;
