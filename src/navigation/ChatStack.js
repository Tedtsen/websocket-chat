import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Chat from '../screen/Chat';

const ChatStack = createStackNavigator();

export default ChatStackScreen = ({navigation}) => {
  return (
    <ChatStack.Navigator screenOptions={stackScreenOptions}>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          headerLeft: stackHeaderLeft(navigation),
        }}></ChatStack.Screen>
    </ChatStack.Navigator>
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
