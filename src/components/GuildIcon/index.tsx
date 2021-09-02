import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";



export function GuildIcon() {
    const uri = 'https://th.bing.com/th/id/R423485d744a56f6e5e482588507df0fa?rik=8y3HaWcIW9eLcQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fgreen-discord-icon-60.png&ehk=xywFAwP6dOc93%2fMncHpWaGtCoP7OYmscwtKn2q5xhL4%3d&risl=&pid=ImgRaw'

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />



    )
}