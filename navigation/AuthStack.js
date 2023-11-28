import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from '../context/AuthContext';
import login from '../src/Stack/login';
import createAccount from '../src/Stack/createAccount';

const Stack = createStackNavigator();

function AuthStackNavigator() {
    return (
        <AuthProvider>
        <Stack.Navigator>
            <Stack.Screen name="Se connecter" component={login} />
            <Stack.Screen name="Créer un compte" component={createAccount} />
        </Stack.Navigator>
        </AuthProvider>
    );
}

export default function AuthStack() {
    return (
        <NavigationContainer>
        <AuthStackNavigator />
        </NavigationContainer>
    );
}
