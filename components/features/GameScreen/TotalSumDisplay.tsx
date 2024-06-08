import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TotalSumDisplayProps {
    sum: number;
}

const TotalSumDisplay: React.FC<TotalSumDisplayProps> = ({ sum }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total: {sum}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#FFF',
        padding: 8,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default TotalSumDisplay;
