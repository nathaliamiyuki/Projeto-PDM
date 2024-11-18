import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const Login = props => {
  
  const Registro = () => {
    props.navigation.navigate('Cadastro');
  };
  const RecuperacaoSenha = () => {
    props.navigation.navigate('RecuperacaoSenha');
  };
  const Home = () => {
    props.navigation.navigate('HomeWithDrawer');
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_layout}>
        <View style={styles.layout}>
          <Text style={styles.text}>Satisfying.you</Text>
        </View>
        <View style={styles.container_img}>
          <Image style={styles.img} source={require('../img/img_01.png')} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.email}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Email?"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.email}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha?"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.button}  onPress={Home}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outroButton1} onPress={Registro}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outroButton2}
        onPress={RecuperacaoSenha}>
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
  container_img: {
    backgroundColor: '#372775',
    padding: 6.25,
    marginLeft: 10,
  },
  img: {
    width: 60,
    height: 60,
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
    fontWeight: 'bold',
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
