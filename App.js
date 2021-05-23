import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { useFonts } from 'expo-font';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const width_80 = Dimensions. get('window'). width * (80/100);

export default function App() {

  return (
    <View style={styles.parentView}>
    <View style={styles.containerView}>
      <View>
        <Text style={styles.loginTxt}>Login</Text>
        <Text style={styles.subTxt}>Access account</Text>
        <View style={styles.touchableContainer}>
          <TouchableOpacity style={styles.touchable_1}>
            <Image source={require('./assets/Images/facebook.png')} style={styles.logo}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable_1}>
          <Image source={require('./assets/Images/google.png')} style={styles.logo}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.demoTxt}>or Login with email</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailTxt}>Email</Text>
          <TextInput style={styles.email} placeholder={'Email'}/>
          <Text style={styles.passwordTxt}>Password</Text>
          <TextInput style={styles.password} secureTextEntry={true} placeholder={'Password'}/>
          <TouchableOpacity 
            style={styles.touchable_2}>
              <Text style={styles.signInTxt}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.accountTxt}>Don't have an account? <Text style={styles.registerTxt}>Register</Text></Text>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f7ff',
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loginTxt: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  subTxt: {
      fontWeight: '100',
      fontSize: 15,
      alignSelf: 'center',
      color: '#bbbbbb',
      marginTop: 20
  },
  touchableContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 50
  },
  touchable_1: {
    height: Dimensions. get('window'). height * (8/100),
    width: Dimensions. get('window'). width * (38/100),
    backgroundColor: "#ffffff",
    borderRadius: 20,
    justifyContent: 'center'
  },
  logo: {
    height: Dimensions. get('window'). height * (5/100),
    width: Dimensions. get('window'). width * (8/100),
    alignSelf: 'center',
    tintColor: '#aebed9'
  },
  demoTxt: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 13,
    color: "#888888"
  },
  emailTxt: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    width: width_80,
    paddingHorizontal: 15,
    paddingVertical: 15,
    position:'relative',
    fontSize: 15,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius:20,
    alignSelf: 'center'
  },
  passwordTxt: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  password: {
    width: width_80,
    paddingHorizontal: 15,
    paddingVertical: 15,
    position:'relative',
    fontSize: 15,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius:20,
    alignSelf: 'center'
  },
  touchable_2: {
    height: 50,
    width: width_80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#3d5869",
    borderRadius: 20,
    marginTop: 80
  },
  signInTxt: {
    alignSelf: 'center',
    color: '#ffffff'
  },
  accountTxt: {
    alignSelf: 'center',
    marginTop: 20
  },
  registerTxt: {
    color: '#3d5869',
    fontWeight: 'bold'
  }
});
