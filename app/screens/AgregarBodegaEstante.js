// Agregar Bodega
import React from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity,
} from 'react-native'; 

export default function AgregarBodegaEstante() {
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ImageBackground source={require('../assets/fondo_product2.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View>
                        <Text style={{
                            color: '#FFFFFF',
                            textAlign: 'center'
                        }}>
                            Agregar Bodega / Estante
                        </Text>
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Picker Entidad'
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
                        justifyContent: 'center',
                        marginTop: 20
                    }}>
                        <TextInput
                            defaultValue='Nombre'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 30,
                                color: '#FFFFFF'
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                color: '#FFFFFF',
                                marginTop: 12
                            }}>Codigo ID</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{
                            color: '#FFFFFF',
                            textAlign: 'center',
                            borderTopColor: '#aaa',
                            borderTopWidth: 1,
                            marginHorizontal: 30,
                            paddingTop: 20
                        }}>Estante</Text>
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Codigo ID'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 30,
                                color: '#FFFFFF',
                                textAlign: 'center'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Letra'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 30,
                                color: '#FFFFFF',
                                textAlign: 'center'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Piso'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 30,
                                color: '#FFFFFF',
                                textAlign: 'center'
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