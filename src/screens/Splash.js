import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import logo from '../assets/favicon.png';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Cinema Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },

  text: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
  },
});

export default Splash;
