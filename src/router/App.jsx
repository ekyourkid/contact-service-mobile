import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/Home';
import DetailPage from '../pages/DetailContact';
import EditPage from '../pages/Edit';
import CreatePage from '../pages/AddContact';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'none',
      }}>
      <Stack.Screen
        name="homePage"
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
      <Stack.Screen
        name="Create"
        component={CreatePage}
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
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePage}
        options={{
          tabBarLabel: 'AddMenu',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle-outline" color={color} size={26} />
          ),
        }}
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
