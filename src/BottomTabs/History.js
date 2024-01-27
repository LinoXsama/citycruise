import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios'; // Importez le module axios
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";

const BASE_URL = process.env.URL;

export default function Login() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (text) => {
        setEmail(text);
    }

    const getPassword = (text) => {
        setPassword(text);
    }

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${BASE_URL}utilisateur.php`, {
                params: {
                    email,
                    password,
                },
            });
            // Traitement des données ou redirection après la connexion
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            Alert.alert('Erreur lors de la connexion');
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        Connexion
                    </Text>
                    <Text style={styles.subtitle}>
                        Rejoignez la communauté CityCruise !
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Adresse e-mail</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder='Entrez votre adresse e-mail'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={styles.input}
                            onChangeText={getEmail}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Mot de passe</Text>
                    <View style={styles.passwordInputView}>
                        <TextInput
                            placeholder='Entrez votre mot de passe'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            style={styles.input}
                            onChangeText={getPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={styles.passwordVisibilityIcon}
                        >
                            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.black} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.createAccountButton}
                >
                    <Text style={styles.buttonText}>
                        SE CONNECTER
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainView: {
        flex: 1,
        marginHorizontal: 22,
    },
    titleView: {
        marginHorizontal: 22,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.black,
    },
    subtitle: {
        fontSize: 22,
        color: COLORS.black,
    },
    inputContainer: {
        marginBottom: 12,
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8,
    },
    inputView: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
    },
    passwordInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 22,
        paddingRight: 12,
    },
    input: {
        flex: 1,
        width: "100%",
    },
    passwordVisibilityIcon: {
        position: "absolute",
        right: 12,
    },
    createAccountButton: {
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 18,
        marginBottom: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});
