// AGREGAR PRODUCTO
import React, { useEffect } from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity,
} from 'react-native';
import { testService } from '../backend/index';

export default function AgregarProducto() {
    useEffect(() => {
        console.log("Effect");
        testService()
            .then((data) => {
                console.log("data testService", data);
            }).catch((error) => { console.log("error testService"); });
    }, []);
    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/fondo_product2.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View>
                        <Text style={{
                            color: '#aaa',
                            textAlign: 'center'
                        }}>Agregar Producto</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TextInput
                            defaultValue='Nombre'
                            style={{
                                height: 90,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                color: '#aaa',
                                marginTop: 40
                            }}>Codigo ID</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Nombre2'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa',
                                fontSize: 20,
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='Nombre3'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='PICKER Entrada'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='PICKER Status'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='PICKER Ubicacion'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            defaultValue='PICKER Estante'
                            style={{
                                height: 40,
                                borderBottomColor: '#aaa',
                                borderBottomWidth: 2,
                                marginHorizontal: 80,
                                color: '#aaa'
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
                                    color: '#000',
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
                                    color: '#000',
                                    fontSize: 20,
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