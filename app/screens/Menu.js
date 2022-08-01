//  MENU PRINCIPAL 
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View, ImageBackground, TouchableOpacity,
    Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Menu() {
    const navigation = useNavigation();

    const [webViewOn, setWebViewOn] = useState(false);

    useEffect(() => {
        setWebViewOn(true);
    }, []);

    return (
        <>
            {webViewOn && <View style={{ position: 'absolute' }}><WebView source={{ uri: 'https://inventariofer.000webhostapp.com/' }} /></View>}
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('AgregarProducto');
                            }}>
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('ActualizarProducto');
                            }}>
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('BuscarProducto');
                            }}>
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('AgregarBodegaEstante');
                            }}>
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('AgregarProveedor');
                            }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Agregar Proovedores</Text>
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
                            onPress={() => {
                                setWebViewOn(false);
                                navigation.navigate('Consultas');
                            }}>
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}>Consultas</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}