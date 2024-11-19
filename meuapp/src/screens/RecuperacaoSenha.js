import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const RecuperacaoSenha = (props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecuperacaoSenha = () => {

    setEmailError('');

    if (!validateEmail(email)) {
      setEmailError('E-mail parece ser inválido');
      return;
    }

    Alert.alert(
      'Recuperação de Senha', 
      'Um link para redefinição de senha foi enviado para o seu e-mail.'
    );

    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Email?"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
        />
        {emailError !== '' && (
          <Text style={styles.errorText}>{emailError}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRecuperacaoSenha}>
        <Text style={styles.buttonText}>RECUPERAR</Text>
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
    marginBottom: 65,
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

export default RecuperacaoSenha;