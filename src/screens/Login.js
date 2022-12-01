import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../assets/favicon.png';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const navigation = useNavigation();
  const [nip, setNip] = useState('29');
  const [password, setPassword] = useState('456');

  const handleLogin = async value => {
    console.log('value', value);

    try {
      const response = await axios.post(
        'http://192.168.229.16:3200/users/login',
        {
          nip: value.nip,
          password: value.password,
        },
      );
      if (response.data.status == 200) {
        console.log('response', response.data);
        navigation.navigate('HomepageScreen');
        // AsyncStorage.setItem
        await AsyncStorage.setItem('password', value.password);
        await AsyncStorage.setItem('nip', value.nip);
        await AsyncStorage.setItem('name', response.data.users.nama);
      }
    } catch (error) {
      console.log(error.message);
      ToastAndroid.show('Cek kembali nip dan password', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          marginBottom: 40,
          marginTop: 10,
        }}>
        Cinema Home
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={nip => setNip(nip)}
          value={nip}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await handleLogin({nip, password});
          }}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Text}>
        Dont have an account?
        <Text
          style={{fontWeight: 'bold'}}
          onPress={() => navigation.navigate('RegisterScreen')}>
          Sign up
        </Text>
      </Text>
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
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#66ccff',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  Text: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});
export default App;
