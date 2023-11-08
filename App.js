import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AddressInput from './components/AddressInput';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <StatusBar style="auto" />
        <AddressInput
          value="" 
          onChangeText={(text) => {
            console.log(text); 
          }}
        />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red', 
  },
});
