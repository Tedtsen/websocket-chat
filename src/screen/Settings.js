import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const Settings = ({navigation}) => {
  useEffect(() => {
    // cleanup function to unsubscribe stuff etc
    // return () => {}
  }, []); // // Only re-run the effect if the state provided inside [ ] changes

  return (
    <View>
      <Text>This is setttings.</Text>
    </View>
  );
};

export default Settings;
