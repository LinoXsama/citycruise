import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

import Home from '../src/BottomTabs/Home';
import History from '../src/BottomTabs/History';

import Course from '../src/Stack/Course';

import selectAccount from '../src/Stack/selectAccount';
import createAccount from '../src/Stack/createAccount';
import login from '../src/Stack/login';
import paiement from '../src/Stack/paiement';
import waiting from '../src/Stack/waiting';
import rateAndComment from '../src/Stack/rateAndComment';

function TabNavigator() {
    return (
        <Tab.Navigator >
        <Tab.Screen name='OnBoarding' component={StackNavigator} />
        <Tab.Screen name='Historique' component={History} />
        </Tab.Navigator>
    );
};

function StackNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen name='Accueil' component={Home} />
        <Stack.Screen name='Course' component={Course} />
        <Stack.Screen name='Comptes' component={selectAccount} />
        <Stack.Screen name='Créer un compte' component={createAccount} />
        <Stack.Screen name='Se connecter' component={login} />
        <Stack.Screen name='Paiement' component={paiement} />
        <Stack.Screen name='Attente' component={waiting} />
        <Stack.Screen name='Votre avis compte' component={rateAndComment} />
        </Stack.Navigator>
    );
};

export default function AppStack() {
    return (
        <NavigationContainer>
        <TabNavigator />
        </NavigationContainer>
    )
}