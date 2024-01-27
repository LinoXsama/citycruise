import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFetchData } from '../../api/api';

const Validation = () => {
  const { data: userData, error } = useFetchData('utilisateur.php');

  // Routage des données depuis l'écran d'OnBoarding
  const route = useRoute();
  const { reservationData } = route.params;

  return (
    // Ce code est utiliser pour itérer sur tous les éléments de la table utilisateurs
    <View style={styles.container}>
      {error && <Text>Erreur lors de la récupération des données : {error.message}</Text>}
      {userData && (
        <View>
          {/* Affiche les données récupérées depuis la base de données */}
          {userData.map(user => (
            <Text key={user.id_utilisateur}>
              {user.nom} {user.prenom} - Email: {user.email} - Téléphone: {user.telephone}
            </Text>
          ))}
        </View>
      )}
      <View style={styles.container}>
        <View>
          <Text>Détail de votre réservation</Text>
        </View>
        <Text>Adresse de départ : {reservationData.startAddress}</Text>
        <Text>Adresse de destination : {reservationData.destination}</Text>
        <Text>Temps estimatif du trajet : </Text>
        <Text>Prix : </Text>
      </View>
    </View>
  );
};

export default Validation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
});
