import background from '../../public/images/bg.jpg';
import avatar from '../../public/images/ava.jpg';
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

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

const DetailPage = ({route, navigation}) => {
  return (
    <MenuProvider style={styles.container}>
      <View style={{width: 450, height: 200}}>
        <Image
          source={background}
          style={{
            width: 450,
            height: 400,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            top: 230,
            right: 160,
            borderRadius: 40,
            zIndex: 1,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Image
            source={avatar}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#604CC3',
            width: 40,
            position: 'absolute',
            top: 60,
            right: 25,
            borderRadius: 10,
            padding: 5,
          }}
          onPress={() => navigation.navigate('Edit')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerArticle}>
        <View style={styles.cardArticle}>
          <View
            style={{backgroundColor: '#CAF4FF', padding: 5, borderRadius: 5}}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={{paddingLeft: 15, fontSize: 15, fontWeight: '500'}}>
              FirstName
            </Text>
          </View>
        </View>
        <View style={styles.cardArticle}>
          <View
            style={{backgroundColor: '#CAF4FF', padding: 5, borderRadius: 5}}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={{paddingLeft: 15, fontSize: 15, fontWeight: '500'}}>
              LastName
            </Text>
          </View>
        </View>
        <View style={styles.cardArticle}>
          <View
            style={{backgroundColor: '#CAF4FF', padding: 5, borderRadius: 5}}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={{paddingLeft: 15, fontSize: 15, fontWeight: '500'}}>
              Id
            </Text>
          </View>
        </View>
        <View style={styles.cardArticle}>
          <View
            style={{backgroundColor: '#CAF4FF', padding: 5, borderRadius: 5}}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={{paddingLeft: 15, fontSize: 15, fontWeight: '500'}}>
              Age
            </Text>
          </View>
        </View>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 450,
  },
  containerArticle: {
    width: 450,
    height: 900,
    backgroundColor: '#EEEDEB',
    marginTop: 90,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  cardArticle: {
    width: 380,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default DetailPage;
