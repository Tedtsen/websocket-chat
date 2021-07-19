import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const Profile = ({navigation}) => {
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Profile'}],
    });

    // cleanup function to unsubscribe stuff etc
    // return () => {}
  }, []); // // Only re-run the effect if the state provided inside [ ] changes

  return (
    <View>
      <Text>Some words right here!</Text>
    </View>
  );
};

export default Profile;
