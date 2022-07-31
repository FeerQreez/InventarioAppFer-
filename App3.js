import React, { useState, useEffect } from 'react';
import { Node } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar,
  StyleSheet, Text, useColorScheme,
  View, TouchableOpacity, Image,
  TextInput, Dimensions, ImageBackground,
} from 'react-native';
import { getDataTest } from './app/backend/index'
const { width, height } = Dimensions.get('window');

const App: () => Node = () => {
  const [loading, setLoading] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);
  console.log("data from server", dataFromServer);

  const functionGetData = async () => {
    await getDataTest()
      .then((data) => {
        console.log("data getDataTest", data);
        setDataFromServer(data);
        // manejar data que contesta el servicio 
      }).catch((error) => { console.log("error getDataTest", error); });
  };

  useEffect(() => {
    console.log("Effect Inicia");
    functionGetData();
  }, [])

  // MENU 
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('./app/assets/inven_bg.jpeg')}
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
              onPress={() => { console.log("Button Pressed"); }}>
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
              onPress={() => { console.log("Button Pressed"); }}>
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
              onPress={() => { console.log("Button Pressed"); }}>
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
              onPress={() => { console.log("Button Pressed"); }}>
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
              onPress={() => { console.log("Button Pressed"); }}>
              <Text style={{
                fontSize: 20,
                textAlign: 'center'
              }}>Agregar a Bodega</Text>
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
              onPress={() => { console.log("Button Pressed"); }}>
              <Text style={{
                fontSize: 20,
                textAlign: 'center'
              }}>Agregar Estantes</Text>
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
              onPress={() => { console.log("Button Pressed"); }}>
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

  //ACTUALIZAR PRODUCTO
  // return (
  //   <>

  //     <View style={{
  //       flex: 1,
  //       // backgroundColor: '#f00',
  //       justifyContent: 'center'

  //     }}>
  //       <ImageBackground source={require('./app/assets/inven_bg.jpeg')}
  //          style={{ flex: 1, justifyContent: 'center' }}
  //         resizeMode='cover'></ImageBackground>
  //       <View style={{ marginBottom: 10 }}>
  //         <Text style={{
  //           color: '#000',
  //           textAlign: 'center'
  //         }}>Actualizar Producto</Text>
  //       </View>
  //       <View style={{ marginBottom: 80 }}>
  //         <Text style={{
  //           color: '#000',
  //           textAlign: 'center'
  //         }} >Criterio de Busqueda</Text>
  //       </View>
  //       <View>
  //         <TextInput
  //           style={{
  //             height: 40,
  //             borderBottomColor: '#aaa',
  //             borderBottomWidth: 5,
  //             marginHorizontal: 80
  //           }}
  //         />
  //       </View>

  //       <View style={{
  //         display: 'flex',
  //         flexDirection: 'row',
  //         marginTop: 40,
  //         justifyContent: 'space-evenly'
  //       }}>

  //         <View>
  //           <TouchableOpacity style={{
  //             borderWidth: 2,
  //             borderColor: '#aaa',
  //             borderRadius: 20
  //           }}>
  //             <Text style={{
  //               color: '#000',
  //               fontSize: 20,
  //               margin: 10
  //             }}>Buscar</Text>
  //           </TouchableOpacity>
  //         </View>
  //         <View>
  //           <TouchableOpacity style={{
  //             borderWidth: 2,
  //             borderColor: '#aaa',
  //             borderRadius: 20
  //           }}>
  //             <Text style={{
  //               color: '#000',
  //               fontSize: 20,
  //               margin: 10
  //             }}>Escanear</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   </>
  // );

  // AGREGAR PRODUCTO
  // return (
  //   <>
  //     {loading ? <Text style={{ backgroundColor: '#ff0' }}>LOADING</Text> : <></>}
  //     <View style={{ flex: 1 }}>
  //       <ImageBackground source={require('./app/assets/fondo_product2.jpeg')}
  //         style={{ flex: 1, justifyContent: 'center' }}
  //         resizeMode='cover'>
  //         <View>
  //           <Text style={{
  //             color: '#aaa',
  //             textAlign: 'center'
  //           }}>Agregar Producto</Text>
  //         </View>
  //         <View style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           justifyContent: 'center'
  //         }}>
  //           <TextInput
  //             defaultValue='Nombre'
  //             style={{
  //               height: 90,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //           <TouchableOpacity>
  //             <Text style={{
  //               color: '#aaa',
  //               marginTop: 40
  //             }}>Codigo ID</Text>
  //           </TouchableOpacity>
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue={dataFromServer?.movies?.[0]?.title}
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa',
  //               fontSize: 20,
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue={dataFromServer?.movies?.[0]?.title}
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='PICKER Entrada'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='PICKER Status'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='PICKER Ubicacion'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='PICKER Estante'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#aaa'
  //             }}
  //           />
  //         </View>
  //         <View style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           marginTop: 40,
  //           justifyContent: 'space-evenly'
  //         }}>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#000',
  //                 fontSize: 18,
  //                 margin: 10
  //               }}>Guardar</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#000',
  //                 fontSize: 20,
  //                 margin: 10
  //               }}>Borrar</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </ImageBackground>
  //     </View>
  //   </>
  // );

  // Agregar Proveedor
  // return (
  //   <>
  //     <View style={{ flex: 1, justifyContent: 'center' }}>
  //       <ImageBackground source={require('./app/assets/fondo_product2.jpeg')}
  //         style={{ flex: 1, justifyContent: 'center' }}
  //         resizeMode='cover'>
  //         <View>
  //           <Text style={{
  //             color: '#FFFFFF',
  //             textAlign: 'center',
  //             marginBottom: 80,
  //           }}>Agregar Proveedor</Text>
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='Nombre'
  //             style={{
  //               height: 80,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#FFFFFF'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='Telefono'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#FFFFFF'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='Correo'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#FFFFFF'
  //             }}
  //           />
  //         </View>
  //         <View>
  //           <TextInput
  //             defaultValue='Id'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#FFFFFF'
  //             }}
  //           />
  //         </View>
  //         <View style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           marginTop: 40,
  //           justifyContent: 'space-evenly'
  //         }}>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#FFFFFF',
  //                 fontSize: 18,
  //                 margin: 10
  //               }}>Guardar</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#FFFFFF',
  //                 fontSize: 18,
  //                 margin: 10
  //               }}>Borrar</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </ImageBackground>
  //     </View>
  //   </>
  // );

  //Buscar Producto
  // return (
  //   <>
  //     <View style={{ flex: 1, justifyContent: 'center' }}>
  //       <ImageBackground source={require('./app/assets/fondo_productos.jpeg')}
  //         style={{ flex: 1, justifyContent: 'center' }}
  //         resizeMode='cover'>
  //         <View>
  //           <Text style={{
  //             color: '#FFFFFF',
  //             textAlign: 'center'
  //           }}>
  //             BUSCAR PRODUCTO 

  //           </Text>
  //         </View>
  //         <View style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           justifyContent: 'space-evenly'
  //         }}>
  //           <TextInput
  //             defaultValue='Picker Nombre'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#FFFFFF'
  //             }}
  //           />
  //           <TextInput
  //             defaultValue='Picker Id'
  //             style={{
  //               height: 40,
  //               borderBottomColor: '#aaa',
  //               borderBottomWidth: 2,
  //               marginHorizontal: 80,
  //               color: '#000'
  //             }}
  //           />
  //         </View>
  //         <View style={{ alignItems: 'center', marginTop: 30 }}>
  //           <Image
  //             source={require('../ProyectoPrueba/app/assets/papas.png')}
  //             style={{ height: 200, width: 200 }}
  //           />
  //         </View>
  //         <View style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           marginTop: 40,
  //           justifyContent: 'space-evenly'
  //         }}>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#FFFFFF',
  //                 fontSize: 18,
  //                 margin: 10
  //               }}>Guardar</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View>
  //             <TouchableOpacity style={{
  //               borderWidth: 2,
  //               borderColor: '#aaa',
  //               borderRadius: 20
  //             }}>
  //               <Text style={{
  //                 color: '#FFFFFF',
  //                 fontSize: 18,
  //                 margin: 10
  //               }}>Borrar</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </ImageBackground>
  //     </View>
  //   </>
  // );

  // Agregar Bodega
  //   return (
  //     <>
  //       <View style={{ flex: 1, justifyContent: 'center' }}>
  //         <ImageBackground source={require('./app/assets/fondo_product2.jpeg')}
  //           style={{ flex: 1, justifyContent: 'center' }}
  //           resizeMode='cover'>
  //           <View>
  //             <Text style={{
  //               color: '#FFFFFF',
  //               textAlign: 'center'
  //             }}>
  //               Agregar Bodega / Estante
  //             </Text>
  //           </View>
  //           <View>
  //             <TextInput
  //               defaultValue='Picker Entidad'
  //               style={{
  //                 height: 40,
  //                 borderBottomColor: '#aaa',
  //                 borderBottomWidth: 2,
  //                 marginHorizontal: 80,
  //                 color: '#FFFFFF'
  //               }}
  //             />
  //           </View>
  //           <View style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             marginTop: 20
  //           }}>
  //             <TextInput
  //               defaultValue='Nombre'
  //               style={{
  //                 height: 40,
  //                 borderBottomColor: '#aaa',
  //                 borderBottomWidth: 2,
  //                 marginHorizontal: 30,
  //                 color: '#FFFFFF'
  //               }}
  //             />
  //             <TouchableOpacity>
  //               <Text style={{
  //                 color: '#FFFFFF',
  //                 marginTop: 12
  //               }}>Codigo ID</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ marginVertical: 20 }}>
  //             <Text style={{
  //               color: '#FFFFFF',
  //               textAlign: 'center',
  //               borderTopColor: '#aaa',
  //               borderTopWidth: 1,
  //               marginHorizontal: 30,
  //               paddingTop: 20
  //             }}>Estante</Text>
  //           </View>
  //           <View>
  //             <TextInput
  //               defaultValue='Codigo ID'
  //               style={{
  //                 height: 40,
  //                 borderBottomColor: '#aaa',
  //                 borderBottomWidth: 2,
  //                 marginHorizontal: 30,
  //                 color: '#FFFFFF',
  //                 textAlign: 'center'
  //               }}
  //             />
  //           </View>
  //           <View>
  //             <TextInput
  //               defaultValue='Letra'
  //               style={{
  //                 height: 40,
  //                 borderBottomColor: '#aaa',
  //                 borderBottomWidth: 2,
  //                 marginHorizontal: 30,
  //                 color: '#FFFFFF',
  //                 textAlign: 'center'
  //               }}
  //             />
  //           </View>
  //           <View>
  //             <TextInput
  //               defaultValue='Piso'
  //               style={{
  //                 height: 40,
  //                 borderBottomColor: '#aaa',
  //                 borderBottomWidth: 2,
  //                 marginHorizontal: 30,
  //                 color: '#FFFFFF',
  //                 textAlign: 'center'
  //               }}
  //             />
  //           </View>
  //           <View style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             marginTop: 40,
  //             justifyContent: 'space-evenly'
  //           }}>
  //             <View>
  //               <TouchableOpacity style={{
  //                 borderWidth: 2,
  //                 borderColor: '#aaa',
  //                 borderRadius: 20
  //               }}>
  //                 <Text style={{
  //                   color: '#FFFFFF',
  //                   fontSize: 18,
  //                   margin: 10
  //                 }}>Guardar</Text>
  //               </TouchableOpacity>
  //             </View>
  //             <View>
  //               <TouchableOpacity style={{
  //                 borderWidth: 2,
  //                 borderColor: '#aaa',
  //                 borderRadius: 20
  //               }}>
  //                 <Text style={{
  //                   color: '#FFFFFF',
  //                   fontSize: 18,
  //                   margin: 10
  //                 }}>Borrar</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </ImageBackground>
  //       </View>
  //     </>
  //   );

};

export default App;
