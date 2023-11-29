import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { generateToken } from "../services/tokenGenerate";

const TOKEN_KEY = 'citycruise-jwt';
export const URL = process.env.URL;
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log("stocké", token);

            if(token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token: token,
                    authenticated: true
                });
            }
        }
        loadToken();
    }, []);

    const register = async (email, password) => {
        try {
            return await axios.post(`${URL}/users`, { email, password });
        } catch (e) {
            return { error: true, msg: e.response.data.msg };
        }
    };

    const login = async (email, password) => {
        try {
            const result = await axios.post(`${URL}/auth`, { email, password });
            
            console.log(result);
            setAuthState({
                token: result.data.token,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result;

        } catch (e) {
            return { error: true, msg: e.response.data.msg };
        }
    };

    const logout = async () => {
        // Supprimer le token du stockage
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        // Mettre à jour les headers HTTP
        axios.defaults.headers.common['Authorization'] = '';

         // Réinitialiser l'état
        setAuthState({
            token: null,
            authenticated: false
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
