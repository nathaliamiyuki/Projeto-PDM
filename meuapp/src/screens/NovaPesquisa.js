import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import ImageResizer from 'react-native-image-resizer';

const NovaPesquisa = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');

  const AcoesPesquisa = async () => {
    setNameError('');
    setDateError('');

    if (name.trim() === '') {
      setNameError('Preencha o nome da pesquisa');
      return;
    }

    if (!date) {
      setDateError('Preencha a data');
      return;
    }

    let localImageUri = imageUri;
    if (imageUri) {
      const fileName = `${name.replace(/ /g, '_')}_${Date.now()}.jpg`;
      const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      await RNFS.copyFile(imageUri, destPath);
      localImageUri = `file://${destPath}`;
    }

    const newCard = {
      id: Date.now(),
      iconName: 'image-outline',
      title: name,
      date: date.toLocaleDateString(),
      imageUri: localImageUri,
    };

    navigation.navigate('HomeWithDrawer', { screen: 'Home', params: { newCard } });
  };

  const selectImage = () => {
    launchImageLibrary({}, async (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        try {
          const resizedImage = await ImageResizer.createResizedImage(
            uri,
            128,
            128, 
            'JPEG',
            100, 
            0, 
            null,
          );
  
          const fileName = `${name.replace(/ /g, '_')}_${Date.now()}.jpg`;
          const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
          await RNFS.copyFile(resizedImage.uri, destPath);

          setImageUri(`file://${destPath}`);
        } catch (err) {
          console.log('Image resizing or saving failed: ', err);
        }
      }
    });
  };
  
  const takePicture = () => {
    launchCamera({}, async (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a captura com câmera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        try {
          const resizedImage = await ImageResizer.createResizedImage(
            uri,
            128,
            128, 
            'JPEG',
            100, 
            0, 
            null,
          );

          const fileName = `${name.replace(/ /g, '_')}_${Date.now()}.jpg`;
          const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
          await RNFS.copyFile(resizedImage.uri, destPath);
  
          setImageUri(`file://${destPath}`);
        } catch (err) {
          console.log('Image resizing or saving failed: ', err);
        }
      }
    });
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Selecionar Imagem',
      'Escolha uma opção',
      [
        { text: 'Escolher da Galeria', onPress: selectImage },
        { text: 'Tirar Foto', onPress: takePicture },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDateError('');
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError('');
            }}
          />
          {nameError !== '' && (
            <Text style={styles.errorText}>{nameError}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              value={date.toLocaleDateString()}
              editable={false}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Icon name="calendar-month" size={24} color="#939393" />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          {dateError !== '' && <Text style={styles.errorText}>{dateError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Imagem</Text>
          <TouchableOpacity onPress={handleImagePicker} style={styles.imagePicker}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.imagePreview} resizeMode="cover" />
            ) : (
              <Text style={styles.imagePickerText}>Câmera/Galeria de imagens</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={AcoesPesquisa}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingRight: 10,
  },

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

  imagePicker: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    flexDirection: 'row',
  },

  imagePickerText: {
    color: '#939393',
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: 10,
  },

  imagePreview: {
    width: '100%',
    height: '100%',
  },

  label: {
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
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
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
    fontFamily: 'AveriaLibre-Regular',
  },

  errorText: {
    color: '#FD7979',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default NovaPesquisa;