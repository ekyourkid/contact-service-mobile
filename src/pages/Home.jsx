import React, {useState, useEffect} from 'react';
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
import {GetDataContact} from '../redux/action/Contact';
import {useDispatch, useSelector} from 'react-redux';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const dataContact = useSelector(state => state.DataReducers.data);

  useEffect(() => {
    dispatch(GetDataContact());
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
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
      <View style={styles.inpuContainer}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            borderRadius: 10,
            marginHorizontal: 20,
          }}>
          <TextInput
            style={{
              width: 200,
              color: 'black',
              borderRadius: 5,
              paddingHorizontal: 15,
            }}
            placeholder="Search Pasta, Bread, etc"
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollHorizontal}>
          {dataContact?.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {id: item?.id})}
              key={index}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7,
              }}>
              <Image
                source={{uri: item?.photo}}
                style={{width: 50, height: 50, borderRadius: 40}}
              />
              <Text style={{fontSize: 14, fontWeight: '500', paddingTop: 3}}>
                {item?.firstName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={styles.scrollVertical}>
          {dataContact?.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {id: item?.id})}
              key={index}
              style={styles.card}>
              <View style={styles.veritcalContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}>
                  <Image
                    source={{uri: item?.photo}}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 40,
                    }}
                  />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{color: 'black', fontSize: 15}}>
                      {item?.firstName} {item?.lastName}
                    </Text>
                    <Text
                      style={{color: 'black', fontSize: 12, fontWeight: '300'}}>
                      Age {item?.age}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inpuContainer: {
    marginBottom: 40,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  container: {
    width: 300,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  scrollVertical: {
    width: 360,
    height: 450,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  scrollHorizontal: {
    width: 360,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  card: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 7,
    borderRadius: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DFD3C3',
  },
  veritcalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomePage;
