// import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFetchData } from '../../api/api';


const Utilisateurs = () => {
    const { data: userData, error } = useFetchData('utilisateur.php');

    // Routage des données depuis l'écran d'OnBoarding
    const route = useRoute();
    const { reservationData } = route.params;

  return (
        <View style={styles.container}>
            {error && <Text>Erreur lors de la récupération des données : {error.message}</Text>}
            {userData && (
            <View>
            {/* Affiche les données récupérées ici */}
            {userData.map(user => (
                <Text key={user.id_utilisateur}>
                {user.nom} {user.prenom} - Email: {user.email} - Téléphone: {user.telephone}
                </Text>
            ))}
            </View>
        )}
        <View>
            <Text>Start Address: {reservationData.startAddress}</Text>
            <Text>Destination: {reservationData.destination}</Text>
        </View>
        </View>
  );
};

export default Utilisateurs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
});
