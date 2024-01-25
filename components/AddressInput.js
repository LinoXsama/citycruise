import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddressInput() {

  const [start_address_value, setStartAddressValue] = useState('');
  const [destination_value, setDestinationValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigation = useNavigation();

  const handleReservePress = () => {
    const reservationData = {
      startAddress: start_address_value,
      destination: destination_value,
    };

    navigation.navigate('Course', { reservationData });
  };

  const onChangeStartAddress = (text) => {
    setStartAddressValue(text);

    if(text.length >= 2) {
      const updatedSuggestions = [
        'Carrefour',
        'Université de Lyon'
      ];

      setSuggestions(updatedSuggestions);
    }
    else {
      suggestions = [];
    }
  }

  const onChangeDestination = (text) => {
    setDestinationValue(text);
  }

  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.depart_input}
        value={start_address_value}
        onChangeText={onChangeStartAddress}
        placeholder="Adresse de départ"
      />
      <TextInput
        style={styles.arrival_input}
        value={destination_value}
        onChangeText={onChangeDestination}
        placeholder="Adresse d'arrivée"
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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },

  depart_input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
  },

  arrival_input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    marginTop: 20,
  },

  button_container: {
    marginTop: 30,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
