import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth_mod } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from 'redux/loginSlice';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const Registro = () => {
    props.navigation.navigate('Cadastro');
  };

  const RecuperacaoSenha = () => {
    props.navigation.navigate('RecuperacaoSenha');
  };

  const Home = () => {
    setEmailError('');
    setLoginError('');

    if (!validateEmail(email) || email.trim() === '' || password.trim() === '') {
      setLoginError('E-mail e/ou senha inválidos.');
      return;
    }

    signInWithEmailAndPassword(auth_mod, email, password)
    .then((userLogin) => {
      console.log(`Usuário fez login corretamente ${JSON.stringify(userLogin)}`);
      dispatch(reducerSetLogin(email));
      props.navigation.navigate('HomeWithDrawer');
    })
    .catch((error) => {
      Alert.alert('Ocorreu um erro ao autenticar o usuario :/.');
      console.log(`Ocorreu um erro ao autenticar o usuario ${JSON.stringify(error)}`);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_layout}>
        <View style={styles.layout}>
          <Text style={styles.text}>Satisfying.you</Text>
        </View>
        <View style={styles.container_icon}>
          <Icon name="mood" size={60} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.email}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
            setLoginError('');
          }}
        />
        {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.email}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setLoginError('');
          }}
        />
        {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={Home}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outroButton1} onPress={Registro}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outroButton2} onPress={RecuperacaoSenha}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
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
  container_layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  layout: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container_icon: {
    backgroundColor: '#372775',
    padding: 6.25,
    marginLeft: 10,
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
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
  },
  outroButton1: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 4,
    borderWidth: 1,
    backgroundColor: '#419ED7',
    width: '75%',
    alignItems: 'center',
    marginBottom: 15,
  },
  outroButton2: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 4,
    borderWidth: 1,
    backgroundColor: '#B0CCDE',
    width: '75%',
    alignItems: 'center',
    marginBottom: 25,
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
    fontFamily: 'AveriaLibre-Regular',
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: '#FD7979',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Login;