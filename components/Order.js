import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import { auth } from '../firebase';


export default function Order({ navigation }) {

    const specials = () => {
        navigation.navigate('Home');
      };

      const orderDetails = () => {
        navigation.navigate('OrderDetails');
      };

      const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Log in")
          })
          .catch(error => alert(error.message))
      }
    

  return (



    <View style={styles.container}>



<Text style={styles.header}>
 Thank You
 
 </Text>

 
<View style={styles.emailInput}>
<Image style={styles.tick} source={require('../assets/tick2.png')} />

 <Text style={styles.successfull}>
  Your Order was Successfull!
 </Text>



   </View>

 <Text style={styles.successfullText}>
 Enjoy your meal. We hope to hear from you again.
 </Text>

<TouchableOpacity>      
<Text style={styles.link} onPress={orderDetails}>
      Show Order Details
      </Text>

 </TouchableOpacity>


      <TouchableOpacity style={styles.button1} onPress={specials} >
      <Text style={styles.buttonText1}>
      CONTINUE
      </Text>
      </TouchableOpacity>

      <Text style={styles.or}>OR</Text>
      
     

<TouchableOpacity onPress={handleSignOut} style={styles.button2}>      
<Text style={styles.buttonText2}>
      SIGN OUT
      </Text>
</TouchableOpacity>


     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    backgroundColor:'#fff'
  },


  tick: {
    
   width:120,
   height:120,
   alignSelf:'center',
   justifyContent:'center',
   margin:30,

    
    

  },

  successfull:{
fontSize:20,
fontWeight:'500',
color:'#4C6793',
margin:10,
  },

  successfullText:{
    fontSize:17,
    width:'70%',
fontWeight:'300',
    margin:10,
    textAlign:'center',

  },
  
 

    header:{
fontSize:30,
fontWeight:'300',
color:'#7A8727',

marginBottom:15,

  },

  link:{
fontSize:17,
marginTop:15,
margin:15,
color:'#4DA5C0',
borderWidth:1,
borderColor:'#c1c1c1',

  },



  button1: {
    margin: 10,
width: 190,
height: 40,
backgroundColor:'#7A8727'
  },

  button2: {
    margin: 10,
width: 190,
height: 40,
backgroundColor:'#DD5353'
  },

  or:{
    fontSize:17,
    fontWeight:'500',
    color:'#c1c1c1'
  },

  buttonText2:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 17,
    fontWeight:'500',
    color:'#fff'
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