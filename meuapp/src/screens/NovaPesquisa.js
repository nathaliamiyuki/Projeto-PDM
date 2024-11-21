import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.email}>Nome</Text>
          <TextInput
            style={styles.input} 
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError('');
            }}
          />
          {nameError !== '' && (
            <Text style={styles.errorText}>{nameError}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={text => {
                setDate(text);
                setDateError('');
              }}
            />
            <View style={styles.iconContainer}>
            <Icon name="calendar-month" size={24} color="#939393" />
            </View>
          </View>
          {dateError !== '' && <Text style={styles.errorText}>{dateError}</Text>}
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 200,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

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
    width: '100%',
    backgroundColor: '#fff',
  },
  
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  label: {
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
    color: '#FD7979',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default NovaPesquisa;
