import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screen/SplashScreen';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';

const RootStack = createStackNavigator();

export default RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}></RootStack.Screen>
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}></RootStack.Screen>
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}></RootStack.Screen>
    </RootStack.Navigator>
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
