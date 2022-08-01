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
import Consultas from '../screens/Consultas';

function MainNavigationFunction() {
    const mainStack = createNativeStackNavigator();

    return (
        <mainStack.Navigator initialRouteName={'Menu'}>
            {/* <mainStack.Screen name='PantalladePrueba' component={PantalladePrueba} /> */}
            <mainStack.Screen name='Menu' component={Menu}
                options={{
                    title: '',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='ActualizarProducto' component={ActualizarProducto}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='AgregarProducto' component={AgregarProducto}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='AgregarProveedor' component={AgregarProveedor}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='BuscarProducto' component={BuscarProducto}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='AgregarBodegaEstante' component={AgregarBodegaEstante}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
            <mainStack.Screen name='Consultas' component={Consultas}
                options={{
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                }} />
        </mainStack.Navigator>
    );
}
export default MainNavigationFunction;