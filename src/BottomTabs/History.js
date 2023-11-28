import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../../context/AuthContext';

const History = () => {
    const {test} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>{test}</Text>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red', 
    },
});