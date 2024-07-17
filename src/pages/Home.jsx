import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import avatar from '../../public/images/ava.jpg';

const HomePage = ({route, navigation}) => {
  return (
    <ScrollView>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: '500'}}>
          Contact Service App
        </Text>
        <Text style={{fontSize: 17}}>Find your friend's contacts</Text>
      </View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.scrollVertical}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.veritcalContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={avatar}
                style={{width: 50, height: 50, borderRadius: 40}}
              />
              <View style={{paddingLeft: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>FirstName</Text>
                <Text style={{color: 'white'}}>Age</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Text style={{color: 'white'}}>Icon</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={{paddingTop: 10, paddingHorizontal: 30}}>
        <Text style={{fontSize: 17, fontWeight: '800'}}>
          People you may check
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollHorizontal}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            marginHorizontal: 5,
          }}>
          <Image
            source={avatar}
            style={{width: 50, height: 50, borderRadius: 40}}
          />
          <Text style={{fontSize: 14, fontWeight: '500', paddingTop: 3}}>
            FirstName
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 450,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  scrollVertical: {
    width: 450,
    height: 500,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  scrollHorizontal: {
    width: 450,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  card: {
    backgroundColor: '#604CC3',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  veritcalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomePage;
