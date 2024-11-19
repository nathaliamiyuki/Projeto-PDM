import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const NovaPesquisa = props => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');

  const AcoesPesquisa = () => {
   
    setNameError('');
    setDateError('');

    if (name.trim() === '') {
      setNameError('Preencha o nome da pesquisa');
      return;
    }

    if (date.trim() === '') {
      setDateError('Preencha a data');
      return;
    }

    props.navigation.navigate('AcoesPesquisa');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <Text style={styles.email}>Nome</Text>
          <TextInput 
            style={styles.input} 
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError(''); // Clear error when typing
            }}
          />
          {nameError !== '' && (
            <Text style={styles.errorText}>{nameError}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.email}>Data</Text>
          <TextInput 
            style={styles.input} 
            value={date}
            onChangeText={(text) => {
              setDate(text);
              setDateError(''); // Clear error when typing
            }}
            placeholder="DD/MM/AAAA"
          />
          {dateError !== '' && (
            <Text style={styles.errorText}>{dateError}</Text>
          )}
        </View>

        <View style={styles.inputContainerImg}>
          <Text style={styles.email}>Imagem</Text>
          <TextInput
            style={styles.inputImg}
            placeholder="Câmera/Galeria de imagens"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={AcoesPesquisa}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
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
    paddingHorizontal: 10,
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

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default NovaPesquisa;
