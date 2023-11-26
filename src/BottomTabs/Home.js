import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AddressInput from "../../components/AddressInput";

export default function HomeScreen() {

    const [start_address, setStartAddress] = useState('');
    const [destination, setDestination] = useState('');

    return (
        <SafeAreaView style={styles.container}>
        <View >
            {/* <StatusBar style="auto" /> */}
            <AddressInput 
                start_address_placeholder="Adresse de départ" 
                start_address_value={start_address} 
                setStartAddressValue={setStartAddress} 
    
                destination_placeholder="Adresse de destination" 
                destination_value={destination} 
                setDestinationValue={setDestination}/>
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