import React from 'react';
import {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    usernamePassedIcon: false,
    passwordSecureTextEntry: true,
    confirmPasswordSecureTextEntry: true,
    isValidUsername: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const handleUsernameChange = val => {
    if (val.trim().length >= 5) {
      setData({
        ...data,
        username: val,
        usernamePassedIcon: true,
        isValidUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        usernamePassedIcon: false,
        isValidUsername: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8 && val.trim() === data.confirmPassword) {
      setData({
        ...data,
        password: val.trim(),
        isValidPassword: true,
        isValidConfirmPassword: true,
      });
    } else if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val.trim(),
        isValidPassword: true,
        isValidConfirmPassword: false,
      });
    } else {
      setData({
        ...data,
        password: val.trim(),
        isValidPassword: false,
        isValidConfirmPassword: false,
      });
    }
  };

  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8 && val.trim() === data.password) {
      setData({
        ...data,
        confirmPassword: val.trim(),
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirmPassword: val.trim(),
        isValidConfirmPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      passwordSecureTextEntry: !data.passwordSecureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmPasswordSecureTextEntry: !data.confirmPasswordSecureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign Up Now</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handleUsernameChange(val)}
          />
          {data.usernamePassedIcon ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {!data.isValidUsername ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be at least 5 characters long
            </Text>
          </Animatable.View>
        ) : null}
        <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.passwordSecureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.passwordSecureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {!data.isValidPassword ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be at least 8 characters long
            </Text>
          </Animatable.View>
        ) : null}
        <Text style={[styles.text_footer, {marginTop: 15}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Same Password As Above"
            secureTextEntry={data.confirmPasswordSecureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirmPasswordSecureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {!data.isValidConfirmPassword ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be the same as above
            </Text>
          </Animatable.View>
        ) : null}
        <View style={styles.button}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signUp}>
            <Text style={[styles.textSign, {color: 'white'}]}>Sign Up</Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            styles.signUp,
            {borderColor: '#009387', borderWidth: 1, marginTop: 15},
          ]}>
          <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
