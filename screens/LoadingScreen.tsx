import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HomeScreenNavigationProp } from '../components/features/HomeScreen/types';

interface LoadingScreenProps {
    navigation: HomeScreenNavigationProp;  // Use a more specific type if possible, such as StackNavigationProp
}

// Mock data for players
const fakePlayers = [
    { id: 1, name: "Player 1" },
    { id: 2, name: "Player 2" },
    { id: 3, name: "Player 3" },
    { id: 4, name: "Player 4" },
    { id: 5, name: "Player 5" }  // Assuming this is the actual player
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
    const [loadedPlayersCount, setLoadedPlayersCount] = useState(0);

    useEffect(() => {
        const loadPlayers = () => {
            const timer = setInterval(() => {
                setLoadedPlayersCount((current) => {
                    const nextCount = current + 1;
                    if (nextCount === fakePlayers.length) {
                        clearInterval(timer);
                        // Optionally navigate to the next screen when all players are loaded
                        // navigation.navigate('GameScreen');
                    }
                    return nextCount;
                });
            }, 1000);  // Simulate a network request delay
        };

        loadPlayers();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Image
                    style={{ width: 150, height: 150 }}  // Set size as needed
                    source={require('../assets/loadingAnimation.gif')}  // Adjust path correctly based on your project structure
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
