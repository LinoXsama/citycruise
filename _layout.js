import React, { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import AppStack from './navigation/AppStack';

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
        if(!fontsLoaded) {
            return <AppLoading />;
        }
    }, [fontsLoaded]);

    useEffect(() => {
        onLayoutRootView();
    }, [onLayoutRootView]);

    return <AppStack />;
};

export default Layout;