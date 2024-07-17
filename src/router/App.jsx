import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/Home';
import DetailPage from '../pages/DetailContact';
import EditPage from '../pages/Edit';
// import {GetDataContact} from '../redux/action/Contact';
// import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

// function HomeSecreen() {
//   const dispatch = useDispatch();
//   const dataContact = useSelector(state => state.getContact);

//   dataContact.forEach(person => {
//     console.log(`ID: ${person.id}`);
//     console.log(`Name: ${person.firstName} ${person.lastName}`);
//     console.log(`Age: ${person.age}`);
//     console.log(`Photo URL: ${person.photo}`);
//     console.log('-----------------------------');
//   });

//   useEffect(() => {
//     dispatch(GetDataContact());
//   }, []);

//   return (
//     <View>
//       <Text>hello</Text>
//     </View>
//   );
// }

function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'none',
      }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={EditPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EFC81A',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'rgba(109, 97, 242, 0.05)',
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{
        //   tabBarLabel: 'Main',
        //   tabBarIcon: ({color}) => (
        //     <IonicIcon name="home-outline" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailPage}
        // options={{
        //   tabBarLabel: 'AddMenu',
        //   tabBarIcon: ({color}) => (
        //     <Ionicons name="add-circle-outline" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Edit"
        component={EditPage}
        // options={{
        //   tabBarLabel: 'AddMenu',
        //   tabBarIcon: ({color}) => (
        //     <Ionicons name="add-circle-outline" color={color} size={26} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}

const Nav = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
}

export default Router;

// const {"payload": [{"age": 111, "firstName": "Bilbo", "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b", "lastName": "Baggins", "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"}, {"age": 20, "firstName": "Luke", "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b", "lastName": "Skywalker", "photo": "N/A"}], "type": "GET_DATA_SUCCESS"}
// LOG     next state {"DataReducers": {"data": [[Object], [Object]], "isError": false, "isLoading": false, "isSuccess": true}, "_persist": {"rehydrated": true, "version": -1}}
