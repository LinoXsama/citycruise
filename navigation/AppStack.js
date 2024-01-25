import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../src/BottomTabs/home';
import Ride from '../src/Stack/ride';
import SelectAccount from '../src/Stack/selectAccount';
import Payment from '../src/Stack/payment';
import Waiting from '../src/Stack/waiting';
import RateAndComment from '../src/Stack/rateAndComment';
import History from '../src/BottomTabs/history';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Accueil' component={StackNavigator} />
            <Tab.Screen name='Historique' component={History} />
        </Tab.Navigator>
    );
};

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Accueil' component={Home} />
            <Stack.Screen name='Course' component={Ride} />
            <Stack.Screen name='Comptes' component={SelectAccount} />
            <Stack.Screen name='Paiement' component={Payment} />
            <Stack.Screen name='Attente' component={Waiting} />
            <Stack.Screen name='Votre avis compte' component={RateAndComment}/>
        </Stack.Navigator>
    );
};

export default function AppStack() {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}