import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons"

const History = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{flex: 1, marginHorizontal: 22}}>
                <View style={{ marginHorizontal: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                        }}>
                        Créer un compte
                    </Text>
                    <Text style={{
                        fontSize: 22,
                        color: COLORS.black
                    }}>
                    Rejoignez la communauté CityCruise !
                    </Text>
                </View>

                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Nom
                    </Text>

                    <View style={{
                        width: "100%",
                        height:48,
                        borderBlockColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput 
                            placeholder='Entrez votre nom'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-adress'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Prénom
                    </Text>

                    <View style={{
                        width: "100%",
                        height:48,
                        borderBlockColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput 
                            placeholder='Entrez votre prénom'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-adress'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Numéro de téléphone
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput 
                            placeholder='+33'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderRightColor: COLORS.grey,
                                height: "100%"
                            }}
                        />

                        <TextInput 
                            placeholder='Entrez votre numéro'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                flex: 1,
                                marginLeft: 8
                            }}
                        />
                    </View>
                </View>

                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mot de passe
                    </Text>

                    <View style={{
                        width: "100%",
                        height:48,
                        borderBlockColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput 
                            placeholder='Entrez votre mot de passe'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12,
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }
                            
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.blue,
                        borderRadius: 10, 
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                >  
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                        CRÉER LE COMPTE
                    </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default History;