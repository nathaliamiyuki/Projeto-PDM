import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const RelatorioPesquisa = () => {
  const data = [
    { name: 'Excelente', population: 40, color: '#FFD966', legendFontColor: '#FFFFFF', legendFontSize: 15 },
    { name: 'Bom', population: 30, color: '#6FA8DC', legendFontColor: '#FFFFFF', legendFontSize: 15 },
    { name: 'Neutro', population: 15, color: '#93C47D', legendFontColor: '#FFFFFF', legendFontSize: 15 },
    { name: 'Ruim', population: 10, color: '#E06666', legendFontColor: '#FFFFFF', legendFontSize: 15 },
    { name: 'Péssimo', population: 5, color: '#76A5AF', legendFontColor: '#FFFFFF', legendFontSize: 15 },
  ];

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório</Text>
      <PieChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
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
