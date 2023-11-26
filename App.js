import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/BottomTabs/Home';
import History from './src/BottomTabs/History';

import Detail from './src/Stack/Detail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


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
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}