// import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddressInput({ start_address_placeholder, start_address_value, setStartAddressValue, destination_placeholder, destination_value, setDestinationValue}) {

    const navigation = useNavigation();

    const handleReservePress = () => {
        // Stockage des données sous la forme d'objet
        const reservationData = {
            startAddress: start_address_value,
            destination: destination_value,
        };

        navigation.navigate('Course', { reservationData });
    };


    return (
        <View style={styles.input_container}>
            <TextInput
                style={styles.depart_input}
                value={start_address_value}
                onChangeText={setStartAddressValue}
                placeholder={start_address_placeholder}
            />
            <TextInput
                style={styles.arrival_input}
                value={destination_value}
                onChangeText={setDestinationValue}
                placeholder={destination_placeholder}
                />
            <View style={styles.button_container}>
                <Button title="RESERVER" onPress={handleReservePress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        width: '100%',
        // Temporaires
        borderWidth: 1,
        borderColor: 'red',
    },

    depart_input: {
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
    },

    arrival_input: {
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        marginTop: 20,
    },

    button_container: {
        marginTop: 30,
    },
});

