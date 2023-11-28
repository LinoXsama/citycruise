import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/BottomTabs/Home';

const Stack = createStackNavigator();

// Chargement des polices au moyen de useFonts.
// Renvoie un tableau avec une valeur booléenne si les
// polices ont été chargées avec succès
const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(() => {
        if (fontsLoaded) {
        SplashScreen.hide();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        onLayoutRootView();
    }, [onLayoutRootView]);

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Layout;