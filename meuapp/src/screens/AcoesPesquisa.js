import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AcoesPesquisa = ({ navigation, route }) => {

  const { card } = route.params;

  const Coleta = () => {
    navigation.navigate('Coleta', { card });
  };

  const ModificarPesquisa = () => {
    navigation.navigate('ModificarPesquisa', { card }); 
  };

  const RelatorioPesquisa = () => {
    navigation.navigate('RelatorioPesquisa', { card });
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.headerTitle}>{card.title}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={ModificarPesquisa}>
        <Icon name="file-document-edit-outline" size={60} color="#FFFFFF" />
        <Text style={styles.text}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={Coleta}>
        <Icon name="checkbox-multiple-marked-outline" size={60} color="#FFFFFF" />
        <Text style={styles.text}>Coletar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={RelatorioPesquisa}>
        <Icon name="chart-arc" size={60} color="#FFFFFF" />
        <Text style={styles.text}>Relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#372775',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312464',
    width: 150,
    height: 170,
    borderRadius: 4,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  headerTitle: {
    position: 'absolute',
    top: 20,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    fontWeight: '400',
    color: '#FFFFFF',
  },
});

export default AcoesPesquisa;