import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const AgradecimentoPartic = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Obrigado por participar da pesquisa! Aguardamos você no próximo ano!
      </Text>
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
  
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default AgradecimentoPartic;
