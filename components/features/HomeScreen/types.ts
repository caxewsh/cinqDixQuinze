import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Loading: undefined;
  // Game: undefined; // Uncomment and define when GameScreen is ready
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
