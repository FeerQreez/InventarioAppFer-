// CONSULTAS
import React, { useState } from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import {
    getBodegas, getCategories,
} from '../backend/index';

const BodegasItem = ({ id, name, address }) => (
    <>
        <View style={{ backgroundColor: '#F80', margin: 10, padding: 10, borderRadius: 10 }}>
            <Text style={{ color: '#000' }}>{`Sucursal Numero: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre de la sucursal: ${name}`}</Text>
            <Text style={{ color: '#000' }}>{`Direccion: ${address}`}</Text>
        </View>
    </>
);

const CategoriasItem = ({ id, category, nameCategory }) => (
    <>
        <View style={{ backgroundColor: '#9F0', margin: 10, padding: 10, borderRadius: 10 }}>
            <Text style={{ color: '#000' }}>{`Categoria numero: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Categoria: ${category}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre de Categoria: ${nameCategory}`}</Text>
        </View>
    </>
);


export default function Consultas() {
    const [dataBodegas, setDataBodegas] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [dataType, setDataType] = useState('');

    const consultaBodegas = async () => {
        setDataType('bodegas');
        await getBodegas()
            .then((data) => {
                console.log("data getBodegas", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getBodegas", error);
            });
    };

    const consultaCategorias = async () => {
        setDataType('categorias');
        await getCategories()
            .then((data) => {
                console.log("data getCategories", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getCategories", error);
            });
    };

    const renderItem = ({ item }) => (
        <>
            {dataType === 'bodegas' &&
                <BodegasItem
                    id={item?.ID_BODEGA}
                    name={item?.NOMBRE}
                    address={item?.DIRECCION}
                />}

            {dataType === 'categorias' &&
                <CategoriasItem
                    id={item?.ID_CATEGORIA}
                    category={item[1]}
                    nameCategory={item?.NOMBRE}
                />}
        </>
    );

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/fondo_product2.jpeg')}
                    style={{ flex: 1, justifyContent: 'center' }}
                    resizeMode='cover'>
                    <View style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        marginTop: 100,
                        justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { consultaBodegas() }}>
                                <Text style={{ color: '#000' }}>BODEGAS</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { consultaCategorias(); }}>
                                <Text style={{ color: '#000' }}>CATEGORIAS</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { }}>
                                <Text style={{ color: '#000' }}>PRODUCTOS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 100,
                        justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { }}>
                                <Text style={{ color: '#000' }}>ESTANTES</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { }}>
                                <Text style={{ color: '#000' }}>ESTATUS</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                padding: 10,
                                borderColor: '#FFF',
                                borderWidth: 2,
                                borderRadius: 10,
                                backgroundColor: '#FFF',
                                justifyContent: 'center'
                            }}
                                onPress={() => { }}>
                                <Text style={{ color: '#000' }}>PROVEEDORES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flex: 5,
                        backgroundColor: '#FFF',
                        margin: 20,
                        borderRadius: 30,
                    }}>
                        <FlatList
                            data={dataToShow}
                            renderItem={renderItem}
                            keyExtractor={item => item?.id}
                        />
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}