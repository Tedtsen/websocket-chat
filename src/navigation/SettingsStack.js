import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Settings from '../screen/Settings';

const SettingsStack = createStackNavigator();

export default SettingsStackScreen = ({navigation}) => {
  return (
    <SettingsStack.Navigator screenOptions={stackScreenOptions}>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerLeft: stackHeaderLeft(navigation),
        }}></SettingsStack.Screen>
    </SettingsStack.Navigator>
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
