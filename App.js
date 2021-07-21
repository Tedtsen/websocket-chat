import 'react-native-gesture-handler'; // Always keep at top, do not move this line
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ContextProvider} from './src/provider/ContextProvider';

// Components
import GetStarted from './src/screen/GetStarted';
import Home from './src/screen/Home';
import Chat from './src/screen/Chat';
import Settings from './src/screen/Settings';

// Shared components
import {DrawerContent} from './src/shared/DrawerContent';

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={stackScreenOptions}>
      <HomeStack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}></HomeStack.Screen>
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

const SettingsStackScreen = ({navigation}) => {
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

const ChatStackScreen = ({navigation}) => {
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

const App = () => {
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <NavigationContainer>
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
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaProvider>
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

export default App;
