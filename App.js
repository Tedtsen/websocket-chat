import 'react-native-gesture-handler'; // Always keep at top, do not move this line
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EncryptedStorage from 'react-native-encrypted-storage';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContext, ContextProvider} from './src/provider/ContextProvider';
import {useState, useEffect, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

// Components
import RootStackScreen from './src/navigation/RootStack';
import HomeStackScreen from './src/navigation/HomeStack';
import SettingsStackScreen from './src/navigation/SettingsStack';
import ChatStackScreen from './src/navigation/ChatStack';

// Shared components
import {DrawerContent} from './src/shared/DrawerContent';

const Drawer = createDrawerNavigator();
const App = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        const storedUserToken = await EncryptedStorage.getItem('userToken');
        if (storedUserToken !== undefined) {
          userToken = storedUserToken;
        }
      } catch (err) {
        console.log(err);
      }
      context.dispatch({type: 'REGISTER', token: userToken});
    }, 2000);
  }, []);

  if (context.loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="black"></ActivityIndicator>
      </View>
    );
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {context.loginState.userToken === null ? (
          <RootStackScreen></RootStackScreen>
        ) : (
          <Drawer.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="Home"
              component={HomeStackScreen}></Drawer.Screen>
            <Drawer.Screen
              name="Chat"
              component={ChatStackScreen}></Drawer.Screen>
            <Drawer.Screen
              name="Settings"
              component={SettingsStackScreen}></Drawer.Screen>
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);
