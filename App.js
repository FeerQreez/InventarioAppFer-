import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigationFunction from './app/Navigation/mainStack'

export default function App() {
    return (
        <NavigationContainer>
            <MainNavigationFunction />
        </NavigationContainer>
    );
}
