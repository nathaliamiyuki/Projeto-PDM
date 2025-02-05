import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg';

const RelatorioPesquisa = () => {
  const data = [
    { key: 1, value: 40, svg: {fill:'#FFD966'}, name: 'Excelente'},
    { key: 2, value: 30, svg: {fill:'#6FA8DC'}, name: 'Bom'},
    { key: 3, value: 15, svg: {fill:'#93C47D'}, name: 'Neutro'},
    { key: 4, value: 10, svg: {fill:'#E06666'}, name: 'Ruim'},
    { key: 5, value: 5, svg: {fill:'#76A5AF'}, name: 'Péssimo'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório</Text>
      <PieChart
        style={{ height: 200, marginVertical: 20 }}
        outerRadius={'70%'}
        innerRadius={10}
        data={data}
      />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.svg.fill }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },

  legendContainer: {
    marginTop: 20,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  legendText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default RelatorioPesquisa;