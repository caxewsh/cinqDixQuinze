import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CountdownTimerProps {
    timeLeft: number;  // Time left in seconds
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Temps restants: ${timeLeft}s`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginBottom: 40,
    },
    text: {
        fontSize: 18,
        color: 'black'
    }
});

export default CountdownTimer;
