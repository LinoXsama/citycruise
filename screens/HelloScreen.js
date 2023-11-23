import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default function HelloScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <View>
              {/* <StatusBar style="auto" /> */}
              <Text>Hello world !</Text>
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
