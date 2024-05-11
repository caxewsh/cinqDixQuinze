import React from 'react';
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoTitle from "../components/features/HomeScreen/LogoTitle";
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
     name="Accueil" 
     component={HomeScreen}
     options={{ 
        headerStyle: {
            backgroundColor: '#606C38',
        },
        headerTitle: () => <LogoTitle />
        }} />
    <Stack.Screen name="Loading" component={LoadingScreen} 
        options={{
            headerShown: false,
            gestureEnabled: false, 
            headerStyle: {
                backgroundColor: '#606C38',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }}/>
    <Stack.Screen name="Game" component={GameScreen} 
        options={{
            headerShown: false,
            gestureEnabled: false, 
            headerStyle: {
                backgroundColor: '#606C38',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }} />
  </Stack.Navigator>
);

export default AppNavigator;
