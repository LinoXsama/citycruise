import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddressInput() {

    const [textDepart, setTextDepart] = useState(''); 
    const [textArrivee, setTextArrivee] = useState('');
    
    const navigation = useNavigation();

    return (
        <View style={styles.input_container}>
            <TextInput
                style={styles.depart_input}
                value={textDepart}
                onChangeText={(text) => setTextDepart(text)}
                placeholder={`Entrez l'adresse de départ`}
            />
            <TextInput
                style={styles.arrival_input}
                value={textArrivee}
                onChangeText={(text) => setTextArrivee(text)}
                placeholder={`Entrez l'adresse d'arrivée`}
                />
            <View style={styles.button_container}>
                <Button title="RESERVER" onPress={() => navigation.navigate('Detail')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        borderColor: 'purple',
        borderWidth: 2,
        padding: 10,

    },

    depart_input: {
        borderColor: 'blue',
        borderWidth: 2,
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
    },

    arrival_input: {
        borderColor: 'blue',
        borderWidth: 2,
        fontSize: 16,
        padding: 10,
        marginTop: 20,
    },

    button_container: {
        marginTop: 30,
    },
});

