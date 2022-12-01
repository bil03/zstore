import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  const [modal, setModal] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'white',
          width: 150,
          paddingVertical: 10,
          borderRadius: 50,
        }}
        onPress={() => setModal(true)}>
        <Text
          style={{
            color: 'black',
          }}>
          Buka Modal
        </Text>
      </TouchableOpacity>
      <Modal visible={modal}>
        <View style={styles.Modal}>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
            }}
            onPress={() => setModal(false)}>
            <Icon name="close" color={'black'} size={30} />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={styles.ikon}
              source={require('../assets/perbaikan.png')}
            />
          </View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}>
            MAINTENANCE
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}>
            Halaman ini sedang dalam perbaikan, harap coba lagi nanti
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModal(false)}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  Modal: {
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  ikon: {
    width: 100,
    height: 100,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#66ccff',
    width: 130,
    height: 40,
    borderRadius: 20,
  },
});

export default Account;
