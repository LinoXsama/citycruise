const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useAuth();

    const login = async () => {
        // Appel de onLogin pour vérifier les informations d'identification
        const result = await onLogin(email, password);

        if (result && result.error) {
            // Afficher une alerte si les informations d'identification sont invalides
            Alert.alert(result.msg);
        } else {
            // Générer le token après la connexion réussie
            const userToken = generateToken(email, password);

            // Utilisation du token ou d'autres opérations liées à la connexion réussie
            // ...

            // Exemple : Naviguer vers une autre page
            navigation.navigate('Accueil');
        }
    }

    // ...
};

export default Login