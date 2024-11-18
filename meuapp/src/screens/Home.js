import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ iconName, title, date, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Icon 
        name={iconName} 
        size={45} 
        color="#3F92C5"
      />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDate}>{date}</Text>
    </TouchableOpacity>
  );
};

const Home = props => {
  const NovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  const cardData = [
    {
      id: 1,
      iconName: 'folder-outline',
      title: 'SECOMP 2023',
      date: '10/10/2023',
    },
    {
      id: 2,
      iconName: 'account-group-outline',
      title: 'UBUNTU 2022',
      date: '05/06/2022',
    },
    {
      id: 3,
      iconName: 'account-outline',
      title: 'MENINAS CPU',
      date: '01/04/2022',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira o termo de busca..."
          placeholderTextColor="#666666"
        />
      </View>

      <View style={styles.cardsContainer}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            iconName={card.iconName}
            title={card.title}
            date={card.date}
            onPress={() => {
              //props.navigation.navigate('AcoesPesquisa', { title: card.title });
            }}
          />
        ))}
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
    backgroundColor: '#372775',
    padding: 16,
    paddingBottom: 0,
  },
  inputContainer: {
    marginBottom: 20,
    width: '95%',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    width: 160,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#3F92C5',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 8,
    fontFamily: 'AveriaLibre-Regular',
  },
  cardDate: {
    fontSize: 12,
    color: '#8B8B8B',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  button: {
    backgroundColor: '#37BD6D',
    padding: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    width: '95%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Home;