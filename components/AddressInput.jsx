import { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Text,
  TextInput, 
  Button,

} from 'react-native';
import styles  from './AddressInputStyles';
import { useNavigation } from '@react-navigation/native';

const data = require('./TEST_DATA.json');

export default function AddressInput() {

  const [startAddress, setStartAddress] = useState('');
  const [suggestions1, setSuggestions1] = useState([]);

  const [destinationAddress, setDestinationAddress] = useState('');
  const [suggestions2, setSuggestions2] = useState([]);

  const navigation = useNavigation();

  const handleReservePress = () => {
    const reservationData = {
      startAddress: startAddress,
      destination: destinationAddress,
    };

    navigation.navigate('validation', { reservationData });
  };

  const onChangeStartAddress = (text) => {
    setStartAddress(text);

    if(text === '') {
      setSuggestions1([]);
    } else {
      filterData(text, setSuggestions1);
    }

  };

  const onChangeDestination = (text) => {
    setDestinationAddress(text);
    if(text === '') {
      setSuggestions2([]);
    } else {
      filterData(text, setSuggestions2);
    }
  };

  const filterData = (searchTerm, setSuggestions) => {
    const filtered = data.filter(item => item.full_name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    setSuggestions(filtered);
  }

  const onSuggestionPress = (item, setValue, setSuggestions) => {
    setValue(item.full_name);
    setSuggestions([]);
}

  const dismissSuggestions = () => {
    setSuggestions1([]);
    setSuggestions2([]);
  }

  const renderSuggestions = (suggestions, setValue, setSuggestions) => {
    return suggestions.slice(0, 4).map((item, index) => (
      <TouchableOpacity key={index} onPress={() => onSuggestionPress(item, setValue, setSuggestions)}>
        <Text style={styles.dropdownRow}>{item.full_name}</Text>
      </TouchableOpacity>
    ));
}

  return(
    <View style={{ flex: 1, backgroundColor: '#007bff' }}>
    <TouchableWithoutFeedback onPress={dismissSuggestions}>
      <View style={styles.container}>
        <View style={styles.formContainer}>

          <TextInput
            placeholder='Adresse de départ'
                    style={styles.input}
                    value={startAddress}
            onChangeText={onChangeStartAddress}
          />
          {suggestions1.length > 0 && (
            <View style={[styles.suggestionsListContainer, styles.elevation]}>
              <ScrollView style={styles.suggestionsList}>
                {renderSuggestions(suggestions1, setStartAddress, setSuggestions1)}
                    </ScrollView>
            </View>
          )}

                <TextInput
                    placeholder='Adresse de destination'
                    style={styles.input}
                    value={destinationAddress}
                    onChangeText={onChangeDestination}
                />
                {suggestions2.length > 0 && (
                  <View style={[styles.suggestionsListContainer, styles.suggestionsListContainer2, styles.elevation]}>
                    <ScrollView style={styles.suggestionsList}>
                      {renderSuggestions(suggestions2, setDestinationAddress, setSuggestions2)}
                    </ScrollView>
                  </View>
                )}

                <View style={styles.buttonContainer}>
                  <Button title="Réserver" onPress={handleReservePress} />
                </View>
                
        </View>
      </View>
    </TouchableWithoutFeedback>
</View>
  )
}