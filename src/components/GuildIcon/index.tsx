import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    //'https://th.bing.com/th/id/R423485d744a56f6e5e482588507df0fa?rik=8y3HaWcIW9eLcQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fgreen-discord-icon-60.png&ehk=xywFAwP6dOc93%2fMncHpWaGtCoP7OYmscwtKn2q5xhL4%3d&risl=&pid=ImgRaw'

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    :
                    <DiscordSvg
                        width={40}
                        height={40}
                    />
            }
        </View>



    )
}