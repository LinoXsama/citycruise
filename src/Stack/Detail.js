import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Utilisateurs = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL de mon serveur
        const URL = 'http://localhost/citycruise/utilisateur.php';
        const response = await axios.get(URL);
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {userData && (
        <View>
          {/* Affichez les données récupérées ici */}
          {userData.map(user => (
            <Text key={user.id_utilisateur}>
              {user.nom} {user.prenom} - Email: {user.email} - Téléphone: {user.telephone}
              {/* Ajoutez les autres champs de votre table utilisateur ici */}
            </Text>
          ))}
        </View>
      )}
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
