//  MENU PRINCIPAL 
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View, ImageBackground, TouchableOpacity,
    Text,
} from 'react-native';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/inven_bg.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#aaa',
                            marginHorizontal: 80,
                            marginVertical: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                            onPress={() => { navigation.navigate('AgregarProducto') }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Agregar Producto</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#aaa',
                            marginHorizontal: 80,
                            marginVertical: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                            onPress={() => { navigation.navigate('ActualizarProducto') }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Actualizar Producto</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#aaa',
                            marginHorizontal: 80,
                            marginVertical: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                            onPress={() => { navigation.navigate('BuscarProducto'); }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Buscar Productos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#aaa',
                            marginHorizontal: 80,
                            marginVertical: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                            onPress={() => { navigation.navigate('AgregarBodegaEstante'); }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Agregar a Bodega/Estante</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#aaa',
                            marginHorizontal: 80,
                            marginVertical: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                            onPress={() => { navigation.navigate('AgregarProveedor'); }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Agregar Proovedores</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}