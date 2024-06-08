import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RoundDisplayProps {
    currentRound: number;
}

const RoundDisplay: React.FC<RoundDisplayProps> = ({ currentRound }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Round ${currentRound}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default RoundDisplay;
