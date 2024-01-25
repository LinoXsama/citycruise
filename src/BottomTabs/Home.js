import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AddressInput from "../../components/AddressInput";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <View >
            {/* <StatusBar style="auto" /> */}
            <AddressInput />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        backgroundColor: '#F9FBFC' 
    },
    root : {
        alignItems : 'center',
        padding: 20,
        backgroundColor: '#F9FBFC'
    }
});