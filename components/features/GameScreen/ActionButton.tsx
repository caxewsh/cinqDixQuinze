// ActionButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ActionButtonProps {
    title: string;
    onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BC6C25',
        padding: 15,
        borderRadius: 30,  // Rounded edges
        width: 80,  // Fixed width for uniformity
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default ActionButton;
