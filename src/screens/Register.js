import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import logo from '../assets/favicon.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Register = () => {
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const [data, setData] = useState({
    nip: '',
    password: '',
    nama: '',
  });

  console.log('nip', data.nip);
  console.log('password', data.password);
  console.log('nama', data.nama);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    try {
      let nip = await AsyncStorage.getItem('nip');
      let password = await AsyncStorage.getItem('password');
      let nama = await AsyncStorage.getItem('nama');
      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          nama: nama,
          password: password,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  const register = async value => {
    console.log('value', value);
    try {
      const response = await axios.post('http://192.168.229.16:3200/users', {
        nip: value.nip,
        nama: value.nama,
        password: value.password,
      });

      if (response.data.status == 200) {
        console.log('response', response.data);
        ToastAndroid.show('Successful registration', ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
      ToastAndroid.show('Failed registration', ToastAndroid.SHORT);
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
          style={styles.Input}
          placeholder="Nip"
          placeholderTextColor="white"
          onChangeText={nip => setNip(nip)}
          value={nip}
        />
        <TextInput
          style={styles.Input}
          placeholder="Nama"
          placeholderTextColor="white"
          onChangeText={nama => setNama(nama)}
          value={nama}
        />
        <TextInput
          style={styles.Input}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (nip == '' || nama == '' || password == '') {
              ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
            } else {
              register({nip: nip, nama: nama, password: password});
              navigation.navigate('LoginScreen');
            }
          }}>
          <Text style={styles.textbutton}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Already have an Account?
        <Text style={{fontWeight: 'bold'}} onPress={() => navigation.goBack()}>
          Sign In
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
  Input: {
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
  textbutton: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Register;
