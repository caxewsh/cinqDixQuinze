import React from 'react';
import { Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ViewLeaderboardButton: React.FC = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Classement 🏆</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    margin: 15,
    backgroundColor: '#BC6C25',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6
  },
  text: {
    color: '#FEFAE0', // Text color
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default ViewLeaderboardButton;
