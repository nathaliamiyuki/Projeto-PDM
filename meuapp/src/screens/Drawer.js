import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Home from './Home';
import AcoesPesquisa from './AcoesPesquisa';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';


const DrawerNavigator = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...props} style={styles.drawerContent}>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>usuario@dominio.com</Text>
            <View style={styles.divider} />
          </View>
  
          <DrawerItem
            label="Pesquisas"
            labelStyle={styles.drawerItemLabel}
            icon={({ color, size }) => (
              <FontistoIcon
                name="file-1"
                color="#FFFFFF"
                size={size}
              />
            )}
            //onPress={() => props.navigation.navigate('AcoesPesquisa')}
          />
        </DrawerContentScrollView>
  
        <View style={styles.logoutContainer}>
          <DrawerItem
            label="Sair"
            labelStyle={styles.drawerItemLabel}
            icon={({ color, size }) => (
              <FeatherIcon
                name="log-out"
                color="#FFFFFF"
                size={size}
              />
            )}
            onPress={() => {
              props.navigation.popToTop();
            }}
          />
        </View>
      </View>
    );
  };

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#2B1D62',
          width: 240,
        },
        headerStyle: {
          backgroundColor: '#2B1D62',
        },
        headerTintColor: '#573FBA',
      }}
    >
      <DrawerNavigator.Screen 
        name="Home" 
        component={Home} 
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            fontWeight: '400',
            color: '#FFFFFF',
            fontSize: 38,
          },
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}>
              <FeatherIcon 
                name="menu"
                size={48}
                color="#FFFFFF"
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </DrawerNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2B1D62',
    },
    drawerContent: {
      flex: 1,
      backgroundColor: '#2B1D62',
    },
    emailContainer: {
      padding: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    emailText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'AveriaLibre-Regular',
      marginBottom: 10,
      textAlign: 'center',
    },
    divider: {
      height: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 5,
      width: '100%',
    },
    drawerItemLabel: {
      color: '#FFFFFF',
      fontSize: 20,
      fontFamily: 'AveriaLibre-Regular',
    },
    drawerIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain'
    },
    logoutContainer: {
      paddingBottom: 20,
    },
  });

export default Drawer;