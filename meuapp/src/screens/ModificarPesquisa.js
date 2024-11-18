import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import { Alert } from 'react-native';


const ModificarPesquisa = props => {

  const[modalVisible, setModalVisible] = useState(false);

  const mostraModal = () => setModalVisible(true);

  const ocultaModal = () => setModalVisible(false);

  const confirmaExclusao = () => {
    ocultaModal();
    Alert.alert('Sucesso', 'Pesquisa excluída com sucesso!');
    props.navigation.goBack();
  }

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
          
          <View style={styles.inputIcon}>
            {/* <Image
              style={styles.img}
              source={require('../img/ModificarPesquisa01.png')}
            /> */}
            <Icon name="party-popper" size={60} color="pink" />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}  onPress={AcoesPesquisa}> 
        <Text style={styles.buttonText}>
          SALVAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteContainer} onPress={mostraModal}>
        <Icon name="delete-outline" size={30} color="#FFFFFF" />
        <Text style={styles.deleteText}>Apagar</Text>
      </TouchableOpacity>


      <Modal
        isVisible={modalVisible}
        onBackdropPress={ocultaModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Tem certeza que deseja excluir esta pesquisa?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={confirmaExclusao} style={styles.confirmButton}>
              <Text style={styles.buttonText}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ocultaModal} style={styles.cancelButton}>
              <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  inputIcon: {
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

  deleteContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  deleteText: {
    marginTop: 5,
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  modalContainer: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    borderRadius: 0,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
  
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  confirmButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FF8383',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#3F92C5',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default ModificarPesquisa;
