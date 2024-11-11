import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const ModificarPesquisa = props => {
  const AcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <Text style={styles.email} placeholder="Carnaval 2024">
            Nome
          </Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.email} placeholder="16/02/2024">
            Data
          </Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainerImg}>
          <Text style={styles.email}>Imagem</Text>
          
          <View style={styles.inputImg}>
            <Image
              style={styles.img}
              source={require('../img/ModificarPesquisa01.png')}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}  onPress={AcoesPesquisa}> 
        <Text style={styles.buttonText}>
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    padding: 20,
  },
  img: {
    width: 60,
    height: 60,
  },
  inputContainer: {
    width: '75%',
    marginBottom: 15,
  },
  inputContainerImg: {
    width: '37%',
    marginBottom: 15,
    justifyContent: 'flex-start',
    color: '#939393',
  },
  inputImg: {
    height: 80,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',

  },
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  button: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: '#37BD6D',
    width: '75%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 55,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ModificarPesquisa;
