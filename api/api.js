import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = process.env.URL;

// RECUPERATION DES DONNEES DES UTILISATEURS - START
const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
};

const useFetchData = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
        try {
            const responseData = await fetchData(endpoint);
            setData(responseData);
        } catch (error) {
            setError(error);
        }
        };

        fetchDataFromApi();
    }, [endpoint]);

    return { data, error };
};

const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi des données :', error);
        throw error;
    }
};

const addUser = async (endpoint, data) => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout des données utilisateur :", error);
        throw error;
    }
};

export { useFetchData, postData, addUser };

// RECUPERATION DES DONNEES DES UTILISATEURS - FIN
