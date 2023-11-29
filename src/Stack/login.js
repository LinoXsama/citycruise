import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { generateToken } from '../../services/tokenGenerate';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useAuth();

    const login = async () => {
        // Génération de token après la connexion
        const userToken = generateToken(email, password);

        const result = await onLogin(email, password, userToken);

        if (result && result.error) {
            Alert.alert(result.msg);
        }
    };




    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={login} />
        </View>
    );
};

export default Login;
