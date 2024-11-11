import React from 'react';


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
 
} from 'react-native';
const Cadastro = () => {
 
  return (
    <View style={styles.container}>
      

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

      
      <View style={styles.inputContainer}>
        <Text style={styles.email}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha :D"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
         
        }}>
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
  
});

export default Cadastro;
