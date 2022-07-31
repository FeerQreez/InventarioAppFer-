// Agregar Proveedor
import React from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity,
} from 'react-native';

export default function AgregarProveedor() {
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ImageBackground source={require('../assets/fondo_product2.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View>
                        <Text style={{
                            color: '#FFFFFF',
                            textAlign: 'center',
                            marginBottom: 80,
                        }}>Agregar Proveedor</Text>
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Nombre'
                            style={{
                                height: 80,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#FFFFFF'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Telefono'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#FFFFFF'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Correo'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#FFFFFF'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Id'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#FFFFFF'
                            }}
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