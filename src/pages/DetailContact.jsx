import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetDetailContact, DeleteContact} from '../redux/action/Contact';
import background from '../../public/images/bg.jpg';
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
  Alert,
} from 'react-native';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

const DetailPage = ({route, navigation}) => {
  const [inputId, setInputId] = useState({
    id: '',
  });
  const dispatch = useDispatch();
  const contactById = useSelector(state => state?.DetailContact?.data);

  useEffect(() => {
    dispatch(GetDetailContact(route?.params?.id));
  }, []);

  const deleteContact = async () => {
    let payload = {
      id: inputId.route?.params?.id,
    };
    dispatch(DeleteContact(payload));
  };

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <View style={{width: 450, height: 100}}>
          <View
            style={{
              width: 450,
              height: 400,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 40,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: contactById?.photo}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}
              />
              <Text
                style={{
                  paddingTop: 15,
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                {contactById?.firstName} {contactById?.lastName}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#C5C7D3',
                  fontWeight: '300',
                }}>
                {contactById?.age} Years Old
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 420,
            backgroundColor: 'white',
            marginTop: 200,
            paddingTop: 40,
            paddingHorizontal: 20,
            borderTopWidth: 1,
            borderTopColor: '#DFD3C3',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            My Profile
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}
            onPress={() => navigation.navigate('Edit', {id: contactById?.id})}>
            <Text style={{color: 'black', fontSize: 13}}>Manage profile</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Confirm',
                'Are you sure you want to delete this recipe?',
                [
                  {
                    text: 'Cancel',
                    // style: 'cancel',
                  },
                  {
                    text: 'Delete',
                    onPress: () => {
                      dispatch(DeleteContact(route?.params?.id));
                    },
                  },
                ],
                {cancelable: true},
              );
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={{color: '#FF4D4D', fontSize: 13}}>
              Delete this contact
            </Text>
            <Text style={{color: '#FF4D4D', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </TouchableOpacity>
          <View style={{paddingTop: 50}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              Help & Feedback
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 13}}>Help articles</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 13}}>Send feedback</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 13}}>Chat with us</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 13}}>About the apps</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              〉
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 900,
    alignItems: 'center',
  },
  containerArticle: {
    width: 360,
    height: 500,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#DFD3C3',
  },
  cardArticle: {
    width: 340,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default DetailPage;
