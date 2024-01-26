
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../src/BottomTabs/home';
import Validation from '../src/Stack/validation';
import SelectAccount from '../src/Stack/selectAccount';
import Payment from '../src/Stack/payment';
import Waiting from '../src/Stack/waiting';
import RateAndComment from '../src/Stack/rateAndComment';
import History from '../src/BottomTabs/history';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Accueil' component={Home} options={{ title: 'Réservez votre course' }}/>
            <Stack.Screen name='Validation' component={Validation} options={{ title: 'Votre réservation' }}/>
            <Stack.Screen name='Comptes' component={SelectAccount} options={{ title: 'Choisissez un compte' }}/>
            <Stack.Screen name='Paiement' component={Payment} options={{ title: 'Procédez au paiement' }}/>
            <Stack.Screen name='Attente' component={Waiting} options={{ title: 'Traitement' }}/>
            <Stack.Screen name='Votre avis compte' component={RateAndComment} options={{ title: 'Votre avis compte' }}/>
        </Stack.Navigator>
    );
};

function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Accueil' component={StackNavigator} />
            <Tab.Screen name='Historique' component={History} />
        </Tab.Navigator>
    );
};

export default function AppStack() {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}