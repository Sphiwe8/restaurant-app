import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function WelcomePage() {

  const navigation = useNavigation()

  const signup = () => {
    navigation.navigate('Sign up');
  };

  const login = () => {
    navigation.replace('Home');
   
  }

  return (
    <View style={styles.container}>

 <Image style={styles.logo} source={require('../assets/icon.png')} />

      <Text style={styles.paragraph}>
        Welcome to Resto Foods. Sign up for delicious mouth watering food or if you already have an account with us, than just Log in . Proudly created by Sphiwe.
      </Text>

      <TouchableOpacity style={styles.button1} onPress={signup} >
      <Text style={styles.buttonText1}>
      SIGN UP
      </Text>
      </TouchableOpacity>

      <Text style={styles.or}>
      OR
      </Text>

      <TouchableOpacity style={styles.button2} onPress={login} >
      <Text style={styles.buttonText2}>
      LOG IN
      </Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#3A4708',
    height:'100%',
   
  },
  paragraph: {
    margin: 15,
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color:'#fff'
  },
  logo: {
    height: 158,
    width: 158,
  },
  button1: {
    margin: 20,
width: 190,
height: 40,
backgroundColor:'#7A8727'
  },

  buttonText1:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 17,
    fontWeight:'500',
    color:'#fff'
  },

  or:{
    fontWeight:'300',
    fontSize:17,
    color:'#fff',
  },

   button2: {
    margin: 20,
width: 190,
height: 40,
backgroundColor:'#428BA1'
  },

    buttonText2:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 17,
    fontWeight:'500',
    color:'#fff'
  },


  
});