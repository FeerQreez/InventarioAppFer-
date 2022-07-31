import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import menu from '../screens/menu';
import PantalladePrueba from '../screens/PantalladePrueba';
import Menu from '../screens/Menu';
import ActualizarProducto from '../screens/ActualizarProducto';
import AgregarProducto from '../screens/AgregarProducto';
import AgregarProveedor from '../screens/AgregarProveedor';
import BuscarProducto from '../screens/BuscarProducto';
import AgregarBodegaEstante from '../screens/AgregarBodegaEstante';

function MainNavigationFunction() {
    const mainStack = createNativeStackNavigator();

    return (
        <mainStack.Navigator initialRouteName={'Menu'}>
            {/* <mainStack.Screen name='PantalladePrueba' component={PantalladePrueba} /> */}
            <mainStack.Screen name='Menu' component={Menu} />
            <mainStack.Screen name='ActualizarProducto' component={ActualizarProducto} />
            <mainStack.Screen name='AgregarProducto' component={AgregarProducto} />
            <mainStack.Screen name='AgregarProveedor' component={AgregarProveedor} />
            <mainStack.Screen name='BuscarProducto' component={BuscarProducto} />
            <mainStack.Screen name='AgregarBodegaEstante' component={AgregarBodegaEstante} />
        </mainStack.Navigator>
    );
}
export default MainNavigationFunction;