import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Movie"
        placeholderTextColor="black"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.Text}>Best Genre</Text>
        <Text style={styles.Text1}>More {'>>'} </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          margin: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Comedy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Aksi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Drama</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Romantis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Animasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.movie}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.Textbutton}>Fantasi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          marginHorizontal: 30,
          marginBottom: 20,
        }}>
        Aksi Populer
      </Text>
      <ScrollView>
        <View>
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/icon1.jpg')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Avengers: Endgame
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                padding: 10,
                textAlign: 'justify',
              }}>
              film pahlawan super Amerika 2019 yang didasarkan pada tim
              superhero Avengers dari Marvel Comics, diproduksi oleh Marvel
              Studios dan didistribusikan oleh Walt Disney Studios Motion
              Pictures.
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                textAlign: 'center',
              }}>
              __________________________________________________
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  style={styles.chat}
                  source={require('../assets/chat.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginTop: 13,
                    marginLeft: 5,
                  }}>
                  321K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.share}
                  source={require('../assets/share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/icon2.jpg')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Black Panther: Wakanda Forever
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                padding: 10,
                textAlign: 'justify',
              }}>
              film pahlawan super Amerika 2019 yang didasarkan pada tim
              superhero Avengers dari Marvel Comics, diproduksi oleh Marvel
              Studios dan didistribusikan oleh Walt Disney Studios Motion
              Pictures.
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                textAlign: 'center',
              }}>
              __________________________________________________
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  style={styles.chat}
                  source={require('../assets/chat.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginTop: 13,
                    marginLeft: 5,
                  }}>
                  233K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.share}
                  source={require('../assets/share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/icon3.jpeg')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Thor: Love and Thunder
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                padding: 10,
                textAlign: 'justify',
              }}>
              film pahlawan super Amerika 2019 yang didasarkan pada tim
              superhero Avengers dari Marvel Comics, diproduksi oleh Marvel
              Studios dan didistribusikan oleh Walt Disney Studios Motion
              Pictures.
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                textAlign: 'center',
              }}>
              __________________________________________________
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  style={styles.chat}
                  source={require('../assets/chat.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginTop: 13,
                    marginLeft: 5,
                  }}>
                  100K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.share}
                  source={require('../assets/share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  input: {
    alignSelf: 'center',
    marginTop: 20,
    width: 350,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 20,
    fontSize: 13,
  },
  Text: {
    fontSize: 20,
    color: 'white',
    marginTop: 30,
    marginHorizontal: 30,
  },
  Text1: {
    fontSize: 15,
    color: 'white',
    marginTop: 35,
    marginHorizontal: 30,
  },
  button: {
    width: 110,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 110,
    height: 40,
    backgroundColor: '#66ccff',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movie: {
    width: 20,
    height: 20,
  },
  Textbutton: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    margin: 'auto',
    marginHorizontal: 5,
  },
  Textpopular: {
    fontSize: 20,
    color: 'white',
  },
  card: {
    margin: 10,
    backgroundColor: 'white',
    width: 350,
    alignSelf: 'center',
    height: 400,
    borderRadius: 15,
  },
  logo: {
    height: 200,
    width: 330,
    margin: 10,
  },
  chat: {
    width: 30,
    height: 25,
    marginTop: 12,
    marginLeft: 15,
  },
  share: {
    width: 30,
    height: 25,
    marginTop: 12,
    marginRight: 15,
  },
});

export default Homepage;
