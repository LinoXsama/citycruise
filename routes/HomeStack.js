import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home_Screen from "../screens/HomeScreen";
import Hello_Screen from "../screens/HelloScreen";

const Stack = createStackNavigator();

const screens = {
    Home: Home_Screen,
    Hello: Hello_Screen,
};

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={screens.Home} 
                    options={{
                        headerTitle: 'Choisissez une destination',
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen 
                    name="Hello" 
                    component={screens.Hello} 
                    options={{
                        headerTitle: 'Hello',
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeStack;
