import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Account = () => {
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmasiSandi, setKonfirmasiSandi] = useState('');

  const [data, setData] = useState({
    nip: '',
    password: '',
    name: '',
  });

  console.log('nip', data.nip);
  console.log('password', data.password);
  console.log('name', data.name);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    try {
      let nip = await AsyncStorage.getItem('nip');
      let password = await AsyncStorage.getItem('password');
      let name = await AsyncStorage.getItem('name');
      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          nama: name,
          password: password,
          name: name,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  const resetPassword = async value => {
    console.log('value', value);
    try {
      const response = await axios.put('http://192.168.229.16:3200/users', {
        nip: value.nip,
        password: value.passwordLama,
        passwordBaru: value.passwordBaru,
      });
      if (response.data.status == 200) {
        console.log('response', response);
        ToastAndroid.show('Password berhasil diubah', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error.message);
      ToastAndroid.show('Cek kembali nip dan password', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <Text>{data.nip}</Text>
      <Text>{data.password}</Text>
      <Text>{data.name}</Text>
      <Text>NIP</Text>
      <TextInput
        style={styles.input}
        placeholder="NIP"
        placeholderTextColor="white"
        onChangeText={nip => setNip(nip)}
        value={nip}
      />
      <Text>Password Lama</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password Lama"
        placeholderTextColor="white"
        // secureTextEntry={true}
        onChangeText={password => setPasswordLama(password)}
        value={passwordLama}
      />
      <Text>Password Baru</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password Baru"
        placeholderTextColor="white"
        // secureTextEntry={true}
        onChangeText={password => setPasswordBaru(password)}
        value={passwordBaru}
      />
      <Text>Konfirmasi Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        placeholderTextColor="white"
        // secureTextEntry={true}
        onChangeText={password => setKonfirmasiSandi(password)}
        value={konfirmasiSandi}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          if (
            nip == '' ||
            passwordLama == '' ||
            passwordBaru == '' ||
            konfirmasiSandi == ''
          ) {
            ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
          } else if (nip !== data.nip || passwordLama !== data.password) {
            ToastAndroid.show('NIP atau Password Salah', ToastAndroid.SHORT);
          } else if (passwordBaru !== konfirmasiSandi) {
            ToastAndroid.show(
              'Password Baru dan Konfirmasi Password Tidak Sama',
              ToastAndroid.SHORT,
            );
          } else {
            resetPassword({
              nip: nip,
              nama: nama,
              passwordLama: passwordLama,
              passwordBaru: passwordBaru,
            });
          }
        }}>
        <Text style={styles.textButton}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 300,
    height: 50,
    backgroundColor: '#66ccff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#000',
    fontSize: 20,
  },
});

export default Account;
