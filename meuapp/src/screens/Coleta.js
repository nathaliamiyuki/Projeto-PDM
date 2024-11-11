import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Coleta = props => {

    const AgradecimentoPartic = () => {
        props.navigation.navigate('AgradecimentoPartic');
    };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>O que você achou do Carnaval 2024?</Text>
        <View style={styles.div}>
            <TouchableOpacity style={styles.button} onPress={AgradecimentoPartic}>
            <Image style={styles.img} source={require('../img/Coleta01.png')} />
            <Text style={styles.textFig}>Péssimo </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={AgradecimentoPartic}>
            <Image style={styles.img} source={require('../img/Coleta02.png')} />
            <Text style={styles.textFig}>Ruim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={AgradecimentoPartic}>
            <Image style={styles.img} source={require('../img/Coleta03.png')} />
            <Text style={styles.textFig}>Neutro </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={AgradecimentoPartic}>
            <Image style={styles.img} source={require('../img/Coleta04.png')} />
            <Text style={styles.textFig}>Bom </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={AgradecimentoPartic}>
            <Image style={styles.img} source={require('../img/Coleta05.png')} />
            <Text style={styles.textFig}>Excelente </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#372775',
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 57.28,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  div: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '65',
    height: '65',
  },
  textFig: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 57.28,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Coleta;
