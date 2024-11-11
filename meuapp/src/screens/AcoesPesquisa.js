import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';


const AcoesPesquisa = props => {
    const Coleta = () => {
        props.navigation.navigate('Coleta');
    };
    const ModificarPesquisa = () => {
        props.navigation.navigate('ModificarPesquisa');
    };
    
  return (
    <View style={styles.container}>
      

      <TouchableOpacity
        style={styles.button}
        onPress={ModificarPesquisa}>
        
        <Image style={styles.img} source={require('../img/AcoesPesquisa01.png')} />
        <Text style={styles.text}>Modificar </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={Coleta}>
           
        <Image style={styles.img} source={require('../img/AcoesPesquisa02.png')} />
        <Text style={styles.text}>Coletar Dados </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
         
        }}>
            
      <Image style={styles.img} source={require('../img/AcoesPesquisa03.png')} />
      <Text style={styles.text}>Relatório </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#372775',
  },
  button:{
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#312464',
    width:150,
    height:170,
    borderRadius: 4, 
  },
  img:{
    marginTop: 12,
    width:60,
    height:60,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  
});

export default AcoesPesquisa;
