// ACTUALIZAR PRODUCTO
import React from 'react';
import {
  View, Text, TouchableOpacity,
  TextInput,
} from 'react-native';

export default function ActualizarProducto() {
  return (
    <>
      <View style={{
        flex: 1,
        // backgroundColor: '#f00',
        justifyContent: 'center'
      }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{
            color: '#000',
            textAlign: 'center'
          }}>Actualizar Producto</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{
            color: '#000',
            textAlign: 'center'
          }} >Criterio de Busqueda</Text>
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              borderBottomColor: '#aaa',
              borderBottomWidth: 2,
              marginHorizontal: 80
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
              }}>Buscar</Text>
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
                fontSize: 18,
                margin: 10
              }}>Escanear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}