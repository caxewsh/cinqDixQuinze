// GameScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlayerProfile from '../components/features/GameScreen/PlayerProfile';
import ActionButton from '../components/features/GameScreen/ActionButton';
import { getPosition } from '../components/features/GameScreen/utils/layoutUtils'; // Make sure this path is correct

const GameScreen: React.FC = () => {
    const players = [
        { id: 1, name: 'Alice', imageUrl: require('../assets/defaultProfile.jpg') },
        { id: 2, name: 'Bob', imageUrl: require('../assets/defaultProfile.jpg') },
        { id: 3, name: 'Joe', imageUrl: require('../assets/defaultProfile.jpg') },
        { id: 4, name: 'David', imageUrl: require('../assets/defaultProfile.jpg') },
        { id: 5, name: 'Moi', imageUrl: require('../assets/defaultProfile.jpg') }  // The actual player
    ];
    const moiIndex = players.findIndex(player => player.name === 'Moi');

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {players.map((player, index) => (
                    <View key={player.id} style={{ ...styles.profileContainer, ...getPosition((index + (players.length - moiIndex)) % players.length, players.length) }}>
                        <PlayerProfile name={player.name} imageUrl={player.imageUrl} />
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <ActionButton title="0" onPress={() => console.log('Chose 0')} />
                <ActionButton title="5" onPress={() => console.log('Chose 5')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#606C38',
    },
    circle: {
        width: 300,  // Ensure this is the diameter of the intended circle
        height: 300,  // Ensure this is the diameter of the intended circle
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileContainer: {
        position: 'absolute',
        width: 60,  // Example profile size
        height: 60,  // Example profile size
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateX: -30 }, { translateY: -30 }]  // Adjust based on profile size to center
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    }
});


export default GameScreen;
