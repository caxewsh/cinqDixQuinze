import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ValueDisplayProps {
    value: number;
}

const ValueDisplay: React.FC<ValueDisplayProps> = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        top: -10,  // Adjust positioning as needed
        left: 10
    },
    text: {
        fontSize: 16,
        color: 'black'
    }
});

export default ValueDisplay;
