// Importez la fonction addUser de votre fichier api.js
import { addUser } from '../../api/api';
import { View, Button, StyleSheet } from 'react-native';


const VotreComposant = () => {

  const addUserHandler = async () => {
    try {
      const userData = {
        nom: 'John',
        prenom: 'Doe',
        email: 'john.doe@example.com',
        telephone: '123456789',
        // Ajoutez d'autres champs selon votre structure de données utilisateur
      };

      // Appel de la fonction addUser pour ajouter l'utilisateur
      const addedUser = await addUser(userData);

      console.log('Utilisateur ajouté avec succès:', addedUser);

      // Si vous souhaitez mettre à jour l'affichage ou effectuer d'autres actions après l'ajout de l'utilisateur, faites-le ici.
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un utilisateur" onPress={addUserHandler} />
    </View>
  );
};

export default VotreComposant;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'red',
    },
  });
  