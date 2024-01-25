// fonts.js

import { useFonts } from 'expo-font';

const loadFonts = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('./fonts/DMSans-Bold.ttf'),
        DMMedium: require('./fonts/DMSans-Medium.ttf'),
        DMRegular: require('./fonts/DMSans-Regular.ttf'),
    });

    return [fontsLoaded];
};

export default loadFonts
