import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { AwesomeTextInput } from 'react-native-awesome-text-input';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
 

  



export default function Login() {

 const signup = () => {
    navigation.navigate('Sign up');
  };

  

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const navigation = useNavigation()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])



  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
   



  return (
    <View style={styles.container}>

 <Image style={styles.logo} source={require('../assets/login-icon.png')} />

<Text style={styles.header}>
 LOG IN
 
 </Text>
<View style={styles.line} />
 
<View style={styles.emailInput}>

 <AwesomeTextInput label="Enter email" 

   onChangeText={text => setEmail(text)}
        value={email}
 />
  </View>

<View style={styles.passwordInput}>
  <AwesomeTextInput label="Password" secureTextEntry 
   onChangeText={text => setPassword(text)}
        value={password}
  />
  </View>

<Text style={styles.linkText}>
      Don't have an Account?
      </Text>


<TouchableOpacity onPress={signup}>      
<Text style={styles.link}>
      Sign up
      </Text>
</TouchableOpacity>






      <TouchableOpacity style={styles.button1}  onPress={handleLogin} >
      <Text style={styles.buttonText1}>
      Log in
      </Text>
      </TouchableOpacity>

     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor:'#fff'
  },


  logo: {
    height: 158,
    width: 158,
    left:50,
    bottom:10,

  },

    header:{
fontSize:30,
fontWeight:'500',
color:'#7A8727',
left: -80,
marginBottom:5,

  },
  line:{
    width:50,
    height:4,
    borderRadius:15,
    left: -95, 
    marginBottom:30,
    backgroundColor:'#DB944B',


  },

  emailInput:{
width:'80%',
marginBottom:60,

  },

   passwordInput:{
width:'80%',
marginBottom:40,

  },

linkText:{
fontSize:17,
margin:5,
}, 

  link:{
fontSize:17,
margin:10,
color:'#4DA5C0'
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
});