import React, { useState } from 'react';
import { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ImageBackground,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { width, height } = Dimensions.get('window');

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text style={{ fontSize: 30, color: '#00f' }} >TEXTO DE PRUEBAAAAAAAAAAAAA</Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


useEffect(() => {
  onst path = 'https://url api '
  const pathInst = 'https://url api '
  const headers = {
  }
  // axios.
}, []);

const App: () => Node = () => {
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [productToShow, setProductToShow] = useState({
    name: 'papas', image: require('./app/assets/papas.png'), id: 1
  });
  const [selectedValue, setSelectedValue] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // return (
  //   <SafeAreaView>
  //     <TextInput
  //       style={styles.input}
  //       onChangeText={(newText) => { setTextInput(newText); }}
  //       value={textInput}
  //     />
  //     <TextInput
  //       style={styles.input}
  //       onChangeText={(newNumber) => { setNumberInput(newNumber); }}
  //       value={numberInput}
  //       placeholder="useless placeholder"
  //       keyboardType="numeric"
  //     />
  //   </SafeAreaView>
  // );

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>
  //       <Header />
  //       <View
  //         style={{
  //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //         }}>

  //         <View style={{ display: 'flex' }}>
  //           <View style={{ flex: 1 }}>
  //             <TouchableOpacity
  //               style={{
  //                 borderWidth: 2,
  //                 borderColor: '#000',
  //                 marginHorizontal: 20,
  //                 marginVertical: 10
  //               }}
  //               onPress={() => console.log("BOTON 1")}>
  //               <Text>AGREGAR PRODUCTO</Text>
  //             </TouchableOpacity>






  //           </View>
  //           <View style={{ flex: 1 }}>
  //             <TouchableOpacity
  //               style={{
  //                 borderWidth: 2,
  //                 borderColor: '#000',
  //                 marginHorizontal: 20,
  //                 marginVertical: 10
  //               }}
  //               onPress={() => console.log("BOTON 2")}>
  //               <Text>AGREGAR PRODUCTO</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ flex: 1 }}>
  //             <TouchableOpacity
  //               style={{
  //                 borderWidth: 2,
  //                 borderColor: '#000',
  //                 marginHorizontal: 20,
  //                 marginVertical: 10
  //               }}
  //               onPress={() => console.log("BOTON 3")}>
  //               <Text>ACTUALIZAR PRODUCTO</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ flex: 1 }}>
  //             <TouchableOpacity
  //               style={{
  //                 borderWidth: 2,
  //                 borderColor: '#000',
  //                 marginHorizontal: 20,
  //                 marginVertical: 10
  //               }}
  //               onPress={() => console.log("BOTON 4")}>
  //               <Text>CONTROL DE PRODUCTOS</Text>
  //             </TouchableOpacity>
  //           </View>

  //         </View>

  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );

  // return (
  //   <ScrollView>
  //     <Text style={{ fontSize: 30 }}>Desliza hacia abajo </Text>
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Text style={{ fontSize: 96 }}>If you like</Text>
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Text style={{ fontSize: 96 }}>Scrolling down</Text>
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Text style={{ fontSize: 96 }}>What's the best</Text>
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Text style={{ fontSize: 96 }}>Framework around?</Text>
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Image source={logo} />
  //     <Text style={{ fontSize: 80 }}>React Native</Text>
  //   </ScrollView>
  // );

  const handleSubmit = () => {
    console.log("Inicia handleSubmit");
    setIsDisabled(true);
  };

  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: 'white',
  //         justifyContent: 'flex-end'
  //       }}
  //     >
  //       <View>
  //         <Image
  //           // source={require('../assets/bg.jpg')}
  //           // source={{ logo }}
  //           source={require('../ProyectoPrueba/app/assets/inven_bg.jpeg')}
  //           style={{ position: 'absolute', top: 100, height: null, width: null }}
  //         />
  //       </View>
  //       <View style={{ height: height / 3, justifyContent: 'center' }}>
  //         <View>
  //           <Text style={{ fontSize: 20, fontWeight: 'bold' }}> SIGN IN </Text>
  //         </View>
  //         <TouchableOpacity
  //           style={{ backgroundColor: '#2E71DC' }}
  //           onPress={() => { handleSubmit(); }}
  //           disabled={isDisabled}>
  //           <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
  //             SING IN WITH ACCOUNT
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View >
  //   );


  //   return (
  //     <View style={{ flex: 1 }}>
  //       <ImageBackground source={require('./app/assets/inven_bg.jpeg')}
  //         style={{ flex: 1, justifyContent: 'center' }}
  //         resizeMode='cover'>
  //         <View style={{
  //           flex: 3,
  //           // backgroundColor: '#f00'
  //         }}>

  //         </View>
  //         <View style={{
  //           flex: 1,
  //           // backgroundColor: '#0ff'
  //         }}>
  //           <View style={{ marginHorizontal: 80 }}>
  //             <TouchableOpacity
  //               onPress={() => { console.log("handle REGISTRATE"); }}>
  //               <Text style={{
  //                 backgroundColor: '#FFF',
  //                 fontSize: 20,
  //                 textAlign: 'center'
  //               }}>Registrate</Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ marginHorizontal: 80, marginTop: 20 }}>
  //             <TouchableOpacity
  //               onPress={() => { console.log("handle INICIA SESION"); }}>
  //               <Text style={{
  //                 backgroundColor: '#FFF',
  //                 fontSize: 20,
  //                 textAlign: 'center'
  //               }}>Inicia Sesión</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>

  //       </ImageBackground>
  //     </View>
  //   );

  // };

  /*prueba  scrollView*/
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };



  // return (
  //   <ScrollView>
  //     <Text>Some text</Text>
  //     <View>
  //       <Text>{`Nombre del Producto: ${productToShow?.name}`}</Text>
  //       <Text>{`Id del Producto: ${productToShow?.id}`}</Text>
  //       <Image
  //         source={productToShow?.image}
  //         style={{ width: 200, height: 200 }}
  //       />
  //     </View>
  //     <TextInput
  //       style={{
  //         height: 40,
  //         borderColor: 'gray',
  //         borderWidth: 1
  //       }}
  //       defaultValue="You can type in me"
  //     />
  //   </ScrollView>
  // );

  // return (
  //   <View>
  //     <Text>AGREGAR PRODUCTO</Text>
  //     <TextInput
  //       style={{
  //         height: 40,
  //         borderColor: 'gray',
  //         borderWidth: 1
  //       }}
  //       defaultValue="Nombre"
  //     />
  //     <TextInput
  //       style={{
  //         height: 40,
  //         borderColor: 'gray',
  //         borderWidth: 1
  //       }}
  //       defaultValue="Codigo ID"
  //     />
  //     <TextInput
  //       style={{
  //         height: 40,
  //         borderColor: 'gray',
  //         borderWidth: 1
  //       }}
  //       defaultValue="Descripcion"
  //     />

  //   </View>
  // );

};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '100',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '100',
  },
  highlight: {
    fontWeight: '100',
  },
});

export default App;

