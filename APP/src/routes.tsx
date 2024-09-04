import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Note from './Pages/Note';
import Lista from './Pages/Lista';
import Pasta from './Pages/Pasta';
import Sincronizar from './Pages/Sincronizar';
import Login from './Pages/User/login';
import Perfil from './Pages/User/user';
import Chat from './Pages/Chat';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        initialParams={{ id: 0, numPasta: 0 }}
        component={Pasta}
      />
      <HomeStack.Screen name="Notas" component={Note} />
      <HomeStack.Screen name="Lista" component={Lista} />
      <HomeStack.Screen name="Pasta0" component={Pasta} />
      <HomeStack.Screen name="Pasta1" component={Pasta} />
      <HomeStack.Screen name="Pasta2" component={Pasta} />
      <HomeStack.Screen name="Pasta3" component={Pasta} />
      <HomeStack.Screen name="Pasta4" component={Pasta} />
      <HomeStack.Screen name="Pasta5" component={Pasta} />
      <HomeStack.Screen name="Pasta6" component={Pasta} />
      <HomeStack.Screen name="Pasta7" component={Pasta} />
      <HomeStack.Screen name="Pasta8" component={Pasta} />
      <HomeStack.Screen name="Pasta9" component={Pasta} />
    </HomeStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Perfil" component={Perfil} />
    </LoginStack.Navigator>
  );
}

const SincronizarStack = createNativeStackNavigator();

function SincronizarScreen() {
  return (
    <SincronizarStack.Navigator>
      <SincronizarStack.Screen name="Sincronizar" component={Sincronizar} />
    </SincronizarStack.Navigator>
  );
}

const Sincronizar2Stack = createNativeStackNavigator();

function Sincronizar2Screen() {
  return (
    <Sincronizar2Stack.Navigator>
      <SincronizarStack.Screen name="Notas" component={Chat} />
    </Sincronizar2Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          card: '#074173',
        },
      }}
    >
      <Tab.Navigator
        // screenOptions={{ headerShown: false }}

        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Sincronizar') {
              iconName = 'sync-alt';
            } else if (route.name === 'Login') {
              iconName = 'login';
            }else if (route.name === 'chat') {
              iconName = 'chat';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={25} color={color} barStyle={{ paddingBottom: 58 }}  />;
          },
          tabBarActiveTintColor: '#68D2E8',
          tabBarInactiveTintColor: '#03AED2',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Sincronizar" component={SincronizarScreen} />
        <Tab.Screen name="chat" component={Sincronizar2Screen} />
        <Tab.Screen name="Login" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
