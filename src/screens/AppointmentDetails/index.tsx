import React from "react";
import { Fontisto } from '@expo/vector-icons'

import {
    View,
    ImageBackground,
    Text,
    FlatList
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Nipa',
            avatar_url: 'https://scontent.fapl1-1.fna.fbcdn.net/v/t1.6435-1/c0.0.200.200a/p200x200/110341706_124629199330366_5725985514883161067_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEHRS0RLRSJb9FUkWquDnqfzq8uZWI59e_Ory5lYjn1706csuAR7een-lJHXUmkqp7KahsvH6XQrva_WO9kjK2s&_nc_ohc=imqbLBieYZwAX8RC5oe&_nc_ht=scontent.fapl1-1.fna&tp=27&oh=4139805132f91e9c4a71c7bc3a259033&oe=60DE1EDE',
            status: 'online'
        },
        {
            id: '2',
            username: 'Emilio',
            avatar_url: 'https://scontent.fapl1-1.fna.fbcdn.net/v/t1.6435-9/193414344_1895158593994928_5042330135754635360_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHYuTc0SX2RPbgCAGfCG3mp40geSgHU9hPjSB5KAdT2E4Okm7v2iQC9BolBBtvimsAhHsU5eurDcBW5MyupbgnP&_nc_ohc=UBwM456SnygAX-cSlhP&_nc_ht=scontent.fapl1-1.fna&oh=04e12a79ae6898b04374b02abc77444b&oe=60DDBB3D',
            status: 'online'
        },
        {
            id: '3',
            username: 'Inácio',
            avatar_url: 'https://scontent.fapl1-1.fna.fbcdn.net/v/t1.6435-9/95340218_2524373214493481_601129511148322816_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFSFdqFxqDndF4n6kPx6I7vpSzkzegPa3mlLOTN6A9reVoP091bPsuQSjkyWS4vaRgDr_CCoqChjjBEws7c8Gma&_nc_ohc=mflQiJHmkksAX9gcxm1&_nc_ht=scontent.fapl1-1.fna&oh=341695b3b77d9567a80b223ee2431e92&oe=60DD4AE3',
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>}
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}

            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>

            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
}