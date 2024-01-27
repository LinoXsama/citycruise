import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = process.env.URL;

// RECUPERATION DES DONNEES DES ADRESSES
const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
};

const useFetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
        try {
            const responseData = await fetchData();
            setData(responseData);
        } catch (error) {
            setError(error);
        }
        };

        fetchDataFromApi();
    }, [data]);

    return { data, error };
};

const postData = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}`, data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi des données :', error);
        throw error;
    }
};

const addUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}`, data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout des données utilisateur :", error);
        throw error;
    }
};

const APImanager = axios.create({
    baseURL: process.env.URL,
    responseType: 'json',
    withCredentials: true,
});


export { useFetchData, postData, addUser, APImanager };

// RECUPERATION DES DONNEES DES UTILISATEURS - FIN
