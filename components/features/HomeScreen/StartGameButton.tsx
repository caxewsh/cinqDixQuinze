import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type StartGameButtonProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const StartGameButton: React.FC<StartGameButtonProps> = ({ navigation }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Loading')}
  >
    <Text style={styles.text}>Go fight ! ⚔</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    margin: 15,
    marginBottom: 2,
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

export default StartGameButton;
