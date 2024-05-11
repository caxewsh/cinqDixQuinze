import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoTitle: React.FC = () => {
  return (
    <Image
      style={styles.image}
      source={require('../../../assets/logoCDQ.png')}
    />
  );
};

const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      borderRadius: 8,
    },
  });

export default LogoTitle;
