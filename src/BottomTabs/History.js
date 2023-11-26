import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react'

const History = () => {
    return (
        <View style={styles.container}>
            <Text>Historique</Text>
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