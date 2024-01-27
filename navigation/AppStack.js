
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Reservation from '../src/BottomTabs/home';
import Validation from '../src/Stack/validation';
import SelectAccount from '../src/Stack/selectAccount';
import Payment from '../src/Stack/payment';
import Waiting from '../src/Stack/waiting';
import RateAndComment from '../src/Stack/rateAndComment';
import History from '../src/BottomTabs/history';

import Login from '../src/Stack/login';
import CreateAccount from '../src/Stack/createAccount';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function AccountStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='account' component={SelectAccount} options={{ title: 'Compte', headerTitleAlign: 'center' }}/>
            <Stack.Screen name='Login' component={Login} options={{ title: 'Connexion', headerTitleAlign: 'center' }} />
            <Stack.Screen name='createAccount' component={CreateAccount} options={{ title: 'Créer un compte', headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

function MainStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='reservation' component={Reservation} options={{ title: 'Réservez votre course', headerTitleAlign: 'center' }} />
            <Stack.Screen name='validation' component={Validation} options={{ title: 'Votre réservation', headerTitleAlign: 'center' }}/>
            <Stack.Screen name='accountStack' component={AccountStackNavigator} options={{ title: 'Compte', headerTitleAlign: 'center' }}/>
            <Stack.Screen name='payment' component={Payment} options={{ title: 'Procédez au paiement', headerTitleAlign: 'center' }}/>
            <Stack.Screen name='waiting' component={Waiting} options={{ title: 'Le chauffeur arrive', headerTitleAlign: 'center' }}/>
            <Stack.Screen name='comments' component={RateAndComment} options={{ title: 'Votre avis compte', headerTitleAlign: 'center' }}/>
        </Stack.Navigator>
    );
};

function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={MainStackNavigator} options={{ title: 'Accueil' }} />
            <Tab.Screen name='history' component={History} options={{ title: 'Historique' }}/>
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