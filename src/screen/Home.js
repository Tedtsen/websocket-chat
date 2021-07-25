import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useContext} from 'react';
import {AppContext} from '../provider/ContextProvider';

const Home = ({navigation}) => {
  const context = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>This is your home!</Text>
      <Text>You are {}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93CAED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    color: 'white',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default Home;
