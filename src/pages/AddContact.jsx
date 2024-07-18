import React, {useState} from 'react';
import background from '../../public/images/bg.jpg';
import ava from '../../public/images/default.jpg';
import * as ImagePicker from 'react-native-image-picker';
import {PostContact} from '../redux/action/Contact';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch} from 'react-redux';

const CreatePage = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const createData = async () => {
    let payload = {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      age: +inputData.age,
      photo: photo.uri,
    };
    dispatch(PostContact(payload, navigation));
  };

  const onChange = (key, value) => {
    setInputData({...inputData, [key]: value});
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response camera', res);
      if (res.didCancel) {
        console.log('user cancel camera');
      } else if (res.error) {
        console.log('camera error', res.errorMessage);
      } else {
        console.log('camera success');
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('response gallery ', res);
      if (res.didCancel) {
        console.log('user cancel gallery');
      } else if (res.error) {
        console.log('gallery error', res.errorMessage);
      } else {
        console.log('gallery success');
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const deletePhoto = () => {
    setPhoto(null);
  };

  return (
    <MenuProvider style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.containerArticle}>
        {photo ? (
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              position: 'relative',
              height: 120,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: 120,
                zIndex: 1,
                position: 'absolute',
                right: 0,
                top: 120,
              }}>
              <TouchableOpacity
                onPress={deletePhoto}
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: '#ee5e5e',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: '700'}}>
                  Delete Photo
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                height: 100,
                width: 100,
                zIndex: 0,
                top: 10,
                borderRadius: 50,
              }}
              source={{uri: photo.uri}}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                zIndex: 0,
                top: 10,
                borderRadius: 50,
              }}
              source={ava}
            />
          </View>
        )}
        <Menu style={{position: 'absolute', right: 120, top: 80}}>
          <MenuTrigger>
            <View
              style={{
                backgroundColor: '#604CC3',
                borderRadius: 20,
                padding: 5,
              }}>
              <Text style={{color: 'white'}}>Edit</Text>
            </View>
          </MenuTrigger>
          <MenuOptions
            style={{
              position: 'absolute',
              backgroundColor: '#C4C4C4',
              right: 65,
              top: 18,
              width: 100,
            }}>
            <MenuOption style={{paddingLeft: 12}}>
              <TouchableHighlight onPress={() => galleryLaunch()}>
                <Text style={{color: 'black'}}>Galery</Text>
              </TouchableHighlight>
            </MenuOption>
            <MenuOption style={{paddingLeft: 12}}>
              <TouchableHighlight onPress={() => cameraLaunch()}>
                <Text style={{color: 'black'}}>Camera</Text>
              </TouchableHighlight>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <View style={styles.containerArticle}>
          <View style={styles.cardArticle}>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                width: 80,
              }}>
              <Text style={{color: 'black'}}>First name</Text>
            </View>
            <View>
              <TextInput
                style={{
                  fontSize: 15,
                  width: 270,
                  paddingHorizontal: 15,
                  fontWeight: '500',
                  backgroundColor: '#E7E7E7',
                  paddingVertical: 2,
                  borderRadius: 5,
                }}
                placeholder={'First Name'}
                type="text"
                onChangeText={newValue => onChange('firstName', newValue)}
              />
            </View>
          </View>
          <View style={styles.cardArticle}>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                width: 80,
              }}>
              <Text style={{color: 'black'}}>Last name</Text>
            </View>
            <View>
              <TextInput
                style={{
                  fontSize: 15,
                  width: 270,
                  paddingHorizontal: 15,
                  fontWeight: '500',
                  backgroundColor: '#E7E7E7',
                  paddingVertical: 2,
                  borderRadius: 5,
                }}
                placeholder={'Last Name'}
                type="text"
                onChangeText={newValue => onChange('lastName', newValue)}
              />
            </View>
          </View>
          <View style={styles.cardArticle}>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                width: 80,
              }}>
              <Text style={{color: 'black'}}>Age</Text>
            </View>
            <View>
              <TextInput
                style={{
                  fontSize: 15,
                  width: 270,
                  paddingHorizontal: 15,
                  fontWeight: '500',
                  backgroundColor: '#E7E7E7',
                  paddingVertical: 2,
                  borderRadius: 5,
                }}
                placeholder={`Age`}
                keyboardType="numeric"
                onChangeText={newValue => onChange('age', newValue)}
              />
            </View>
          </View>
          <TouchableHighlight
            style={{marginTop: 50, width: 300}}
            underlayColor={'#b89b1a'}
            onPress={() => createData()}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'white',
                backgroundColor: '#0944FF',
                borderRadius: 5,
                textAlign: 'center',
                padding: 15,
              }}>
              Create Contact
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 800,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerArticle: {
    width: 330,
    height: 400,
    backgroundColor: 'white',
    marginTop: 100,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  cardArticle: {
    width: 290,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default CreatePage;
