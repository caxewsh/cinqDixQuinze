import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface PlayerProfileProps {
    name: string;
    imageUrl: any;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ name, imageUrl}) => {
    return (
        <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 30,  // Makes it circular
        backgroundColor: '#ccc'  // Placeholder color
    },
    name: {
        marginTop: 5
    }
});

export default PlayerProfile


