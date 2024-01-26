
import { StyleSheet } from 'react-native';

const adressInputStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
    },
    input: {
        borderWidth: 0.8,
        padding: 8,
        marginBottom: 16,
    },
    suggestionsListContainer: {
        position: 'absolute',
        top: 62,
        left: 16,
        zIndex: 1,
        backgroundColor: 'white',
        width: '100%',
        
    },
    suggestionsListContainer2: {
        position: 'absolute',
        top: 123,
        left: 16,
        zIndex: 1,
        backgroundColor: 'white',
        width: '100%',
        
    },
    suggestionsList: {
        flex: 1,
    },
    dropdownRow: {
        padding: 8,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    buttonContainer: {
        marginTop: 60,
    },
    elevation: {
        elevation: 10,
    },
});

export default adressInputStyles
