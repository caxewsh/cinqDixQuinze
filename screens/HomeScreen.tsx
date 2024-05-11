import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeScreenNavigationProp } from '../components/features/HomeScreen/types';
import StartGameButton from '../components/features/HomeScreen/StartGameButton';
import ViewLeaderboardButton from '../components/features/HomeScreen/ViewLeaderboardButton';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur le 5-10-15!</Text>
      <StartGameButton navigation={navigation} />
      <ViewLeaderboardButton />
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
});

export default HomeScreen;
