import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Components
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const AppContext = React.createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <AppContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
        }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Welcome', headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerLeft: null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
