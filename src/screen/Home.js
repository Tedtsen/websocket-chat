import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Websocket Chat</Text>
      <Text style={styles.paragraph}>
        React Native implementation of a WebSocket Chat App.
        {'\n'}
        Please don't send sensitive information.
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}></Button>
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
  },
  paragraph: {
    fontSize: 14,
    color: 'white',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default Home;
