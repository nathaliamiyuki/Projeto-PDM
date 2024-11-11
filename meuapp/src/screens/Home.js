import React from 'react';


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
 
} from 'react-native';
const Home = props => {
    const NovaPesquisa= () => {
        props.navigation.navigate('NovaPesquisa');
    };
  return (
    
   
    <View style={styles.container}>
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.input}
          placeholder="Insira o termo de busca..."
          keyboardType="email-address"
         
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={NovaPesquisa}>
        <Text style={styles.buttonText}>NOVA PESQUISA</Text>
      </TouchableOpacity>
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    
    backgroundColor: '#372775',
    padding: 20,
  },
  inputContainer: {
    width: '95%',
    marginBottom: 65,
    flex: 1,
    marginTop: 50,
  },
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: ' #8B8B8B',
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
    width: '95%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 55,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default Home;