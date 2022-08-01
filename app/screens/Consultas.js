// CONSULTAS
import React, { useState } from 'react';
import {
    View, ImageBackground, Text,
    TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import {
    getBodegas, getCategories, getProducts,
    getEntities, getShelf, getStatus, getSuppliers
} from '../backend/index';

const BodegasItem = ({ id, name, address }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Sucursal Numero: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre de la sucursal: ${name}`}</Text>
            <Text style={{ color: '#000' }}>{`Direccion: ${address}`}</Text>
        </View>
    </>
);

const CategoriasItem = ({ id, category, nameCategory }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Categoria numero: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Categoria: ${category}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre de Categoria: ${nameCategory}`}</Text>
        </View>
    </>
);

const ProductosItem = ({ id, name, description }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`ID de Producto: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre de Producto: ${name}`}</Text>
            <Text style={{ color: '#000' }}>{`Descripcion de Producto: ${description}`}</Text>
        </View>
    </>
);

const EntidadesItem = ({ id, nameCity, nameState }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Id Entidad: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Ciudad: ${nameCity}`}</Text>
            <Text style={{ color: '#000' }}>{`Estado: ${nameState}`}</Text>
        </View>
    </>
);

const EstantesItem = ({ id, letter, floor }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Id Estante: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Letra de Estante: ${letter}`}</Text>
            <Text style={{ color: '#000' }}>{`Piso de Estante: ${floor}`}</Text>
        </View>
    </>
);

const EstatusItem = ({ id, description }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Id Status: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Descripcion de Status: ${description}`}</Text>
        </View>
    </>
);

const ProveedoresItem = ({ id, name, phone, email }) => (
    <>
        <View style={{ margin: 10, padding: 10, borderRadius: 10, borderColor: '#000', borderWidth: 2 }}>
            <Text style={{ color: '#000' }}>{`Id Proveedor: ${id}`}</Text>
            <Text style={{ color: '#000' }}>{`Nombre del Proveedor: ${name}`}</Text>
            <Text style={{ color: '#000' }}>{`Telefono del Proveedor: ${phone}`}</Text>
            <Text style={{ color: '#000' }}>{`Email del Proveedor: ${email}`}</Text>
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

    const consultaProductos = async () => {
        setDataType('productos');
        await getProducts()
            .then((data) => {
                console.log("data getProducts", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getProducts", error);
            });
    };

    const consultaEntidades = async () => {
        setDataType('entidades');
        await getEntities()
            .then((data) => {
                console.log("data getEntities", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getEntities", error);
            });
    };

    const consultaEstantes = async () => {
        setDataType('estantes');
        await getShelf()
            .then((data) => {
                console.log("data getShelf", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getShelf", error);
            });
    };

    const consultaEstatus = async () => {
        setDataType('estatus');
        await getStatus()
            .then((data) => {
                console.log("data getStatus", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getStatus", error);
            });
    };

    const consultaProveedores = async () => {
        setDataType('proveedores');
        await getSuppliers()
            .then((data) => {
                console.log("data getSuppliers", data);
                setDataToShow(data);
            })
            .catch((error) => {
                console.log("error getSuppliers", error);
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

            {dataType === 'productos' &&
                <ProductosItem
                    id={item?.ID_PRODUCTO}
                    name={item?.NOMBRE_PROD}
                    description={item?.DESCRIPCION}
                />}

            {dataType === 'estantes' &&
                <EstantesItem
                    id={item?.ID_ESTANTE}
                    letter={item?.LETRA_ESTANTE}
                    floor={item?.PISO}
                />}

            {dataType === 'estatus' &&
                <EstatusItem
                    id={item?.ID_ESTATUS}
                    description={item?.NOMBRE}
                />}

            {dataType === 'proveedores' &&
                <ProveedoresItem
                    id={item?.ID_PROVEEDOR}
                    name={item?.NOMBRE}
                    phone={item?.TELEFONO}
                    email={item?.CORREO}
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
                                onPress={() => { consultaProductos(); }}>
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
                                onPress={() => { consultaEstantes(); }}>
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
                                onPress={() => { consultaEstatus(); }}>
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
                                onPress={() => { consultaProveedores(); }}>
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