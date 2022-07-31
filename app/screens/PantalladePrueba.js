import React from 'react';

import {
    Text, View
} from 'react-native';

export default function PantalladePrueba() {
    return (
        <View Style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text Style={{ color: '#f00' }}>PruebaScreen</Text>
        </View>
    );
}