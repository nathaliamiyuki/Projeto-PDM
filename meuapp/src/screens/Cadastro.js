import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
 
} from 'react-native';

const Cadastro = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCadastro = () => {
    // Reset previous errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('E-mail inválido');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setPasswordError('O campo repetir senha difere da senha');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.email}>E-mail</Text>
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

      <View style={styles.inputContainer}>
        <Text style={styles.email}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha?"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError(''); // Clear password error when typing
          }}
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Text style={styles.email}>Repetir Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha :D"
          secureTextEntry
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setPasswordError(''); // Clear password error when typing
          }}
        />
        {passwordError !== '' && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastro}>
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

export default Cadastro;
