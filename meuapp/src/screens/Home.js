import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ iconName, title, date, onPress, isPortrait, imageUri }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.cardImage} resizeMode="cover" />
      ) : (
        <Icon 
          name={iconName} 
          size={isPortrait ? 128 : 64}
          color="#3F92C5"
        />
      )}
      <Text style={[styles.cardTitle, { fontSize: isPortrait ? 36 : 18 }]}>{title}</Text>
      <Text style={[styles.cardDate, { fontSize: isPortrait ? 18 : 9 }]}>{date}</Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation, route }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [cardData, setCardData] = useState([
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
  ]);

  useEffect(() => {
    if (route.params?.newCard) {
      setCardData([...cardData, route.params.newCard]);
    }
  }, [route.params?.newCard]);

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    setIsPortrait(height >= width);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    handleOrientationChange(); 

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const NovaPesquisa = () => {
    navigation.navigate('NovaPesquisa');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon 
          name="magnify" 
          size={20} 
          color="#666666" 
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira o termo de busca..."
          placeholderTextColor="#666666"
        />
      </View>

      <ScrollView 
        horizontal 
        style={styles.scrollView}
        contentContainerStyle={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cardData.map((card) => (
          <Card
            key={card.id}
            iconName={card.iconName}
            title={card.title}
            date={card.date}
            onPress={() => {
              //navigation.navigate('AcoesPesquisa', { title: card.title });
            }}
            isPortrait={isPortrait}
            imageUri={card.imageUri}
          />
        ))}
      </ScrollView>

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
    height: '100%',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: '95%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 35,
    fontSize: 14,
  },
  scrollView: {
    width: '95%',
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 320,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 36,
    color: '#3F92C5',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 8,
    fontFamily: 'AveriaLibre-Regular',
  },
  cardDate: {
    fontSize: 18,
    color: '#8B8B8B',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  button: {
    backgroundColor: '#37BD6D',
    padding: 12,
    alignItems: 'center',
    width: '95%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Home;