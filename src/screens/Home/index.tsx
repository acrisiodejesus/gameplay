import React, { useCallback } from "react";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";





export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }
    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage)
        }
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();

    }, [category]))
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="Partidas Agendadas"
                            subtitle={`Total ${appointments.length}`}
                        />
                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    onPress={() => handleAppointmentDetails(item)}
                                    data={item}
                                />

                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }


        </Background>
    );
}