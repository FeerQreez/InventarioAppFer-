// Buscar Producto
import React from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity, Image,
} from 'react-native';

export default function BuscarProducto() {
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ImageBackground source={require('../assets/fondo_productos.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View>
                        <Text style={{
                            color: '#FFFFFF',
                            textAlign: 'center'
                        }}>
                            BUSCAR PRODUCTO
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <TextInput
                            defaultValue='Picker Nombre'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#FFFFFF'
                            }}
                        />
                        <TextInput
                            defaultValue='Picker Id'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#000'
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Image
                            source={require('../assets/papas.png')}
                            style={{ height: 200, width: 200 }}
                        />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 40,
                        justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <TouchableOpacity style={{
                                borderWidth: 2,
                                borderColor: '#aaa',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                    margin: 10
                                }}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                borderWidth: 2,
                                borderColor: '#aaa',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                    margin: 10
                                }}>Borrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}