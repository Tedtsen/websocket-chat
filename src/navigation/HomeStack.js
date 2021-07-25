import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';

const HomeStack = createStackNavigator();

export default HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={stackScreenOptions}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: stackHeaderLeft(navigation),
        }}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const stackScreenOptions = {
  headerStyle: {
    backgroundColor: '#93CAED',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const stackHeaderLeft = navigation => {
  return () => (
    <Icon.Button
      name="ios-menu"
      size={25}
      backgroundColor="#93CAED"
      onPress={() => {
        navigation.openDrawer();
      }}></Icon.Button>
  );
};
