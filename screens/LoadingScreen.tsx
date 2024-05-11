import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HomeScreenNavigationProp } from '../components/features/HomeScreen/types';

interface LoadingScreenProps {
    navigation: HomeScreenNavigationProp;  // More specific type like StackNavigationProp can be used here if set up.
}

const fakePlayers = [
    { id: 1, name: "Player 1" },
    { id: 2, name: "Player 2" },
    { id: 3, name: "Player 3" },
    { id: 4, name: "Player 4" },
    { id: 5, name: "Moi" }  // Assuming this is the actual player
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
    const [loadedPlayersCount, setLoadedPlayersCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (loadedPlayersCount < fakePlayers.length) {
                setLoadedPlayersCount(current => current + 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);  // Cleanup to clear the timer when the component unmounts
    }, [loadedPlayersCount]);

    useEffect(() => {
        if (loadedPlayersCount === fakePlayers.length) {
            navigation.navigate('Game');
        }
    }, [loadedPlayersCount, navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={require('../assets/loadingAnimation.gif')}
                />
            </View>
            <Text>Chargement de la partie...</Text>
            <Text>{`${loadedPlayersCount}/${fakePlayers.length}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#606C38',
    },
    loader: {
        padding: 10,
    }
});

export default LoadingScreen;
