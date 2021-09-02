import React from "react";

import {
    View,
    Text,
    TextInput,
    Image,
    Alert

} from "react-native";


import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from '../../components/Background'
import { useAuth } from "../../hooks/auth";




export function SignIn() {

    const { user, signIn } = useAuth()


    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }
    return (
        <Background>
            <View style={styles.container}>

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie Grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}