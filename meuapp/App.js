import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import AgradecimentoPartic from './src/screens/AgradecimentoPartic';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Drawer from './src/screens/Drawer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Drawer" component={Drawer}/>
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', 
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400', 
              color: '#FFFFFF',
              fontSize: 38,
            },
            title: 'Nova Conta', 
          }}
        />
        <Stack.Screen
          name="RecuperacaoSenha"
          component={RecuperacaoSenha}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', 
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400', 
              color: '#FFFFFF',
              fontSize: 38,
            },
            title: 'Recuperação de senha', 
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', 
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400',
              color: '#FFFFFF',
              fontSize: 38,
            }, title: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  /* quando clicar no icone*/
                }}>
                <Image
                  style={{width: 50, height: 26, marginLeft: 15}}
                  source={require('../meuapp/src/img/home_icone.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="NovaPesquisa"
          component={NovaPesquisa}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', 
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400', 
              color: '#FFFFFF',
              fontSize: 38,
            },
            title: 'Nova pesquisa', 
          }}
        />
         <Stack.Screen
          name="Coleta"
          component={Coleta}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AcoesPesquisa"
          component={AcoesPesquisa}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62',
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400',
              color: '#FFFFFF',
              fontSize: 38,
            },
            title: 'Carnaval', 
          }}
        />
        <Stack.Screen
          name="AgradecimentoPartic"
          component={AgradecimentoPartic}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ModificarPesquisa"
          component={ModificarPesquisa}
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', 
            },
            headerTintColor: '#573FBA', 
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              fontWeight: '400', 
              color: '#FFFFFF',
              fontSize: 38,
            },
            title: 'Modificar pesquisa', 
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;