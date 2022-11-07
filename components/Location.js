import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { AwesomeTextInput } from 'react-native-awesome-text-input';
import { useNavigation } from '@react-navigation/core';
import { db } from '../firebase'

export default function Location({route, navigation}) {

  

    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [suburd, setSuburd] = React.useState('');

    const order = () => {

     

        db.collection("orders").add({
            Name: name,
            PhoneNumber: number,
            StreetName: street,
            Suburd: suburd,
            food:route.params.menu,
            

        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('Order');
          
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
           
        });

        
     
      };

   


  return (
    <ScrollView>
    <View style={styles.container}>

 <Image style={styles.logo} source={require('../assets/location.png')} />

<Text style={styles.header}>
 YOUR PERSONAL DETAILS
 
 </Text>
<View style={styles.line} />

<View style={styles.emailInput}>

 <AwesomeTextInput label="Your name" 
 onChangeText={text => setName(text)}
 value={name}
  
 />
  </View>

<View style={styles.passwordInput}>
  <AwesomeTextInput label="Phone number" 
   onChangeText={text => setNumber(text)}
   value={number}
  />
  </View>

 
<View style={styles.emailInput}>

 <AwesomeTextInput label="Street name" 
 onChangeText={text => setStreet(text)}
 value={street}
  
 />
  </View>

<View style={styles.passwordInput}>
  <AwesomeTextInput label="Suburd" 
   onChangeText={text => setSuburd(text)}
   value={suburd}
  />
  </View>


     






      <TouchableOpacity style={styles.button1} onPress={order}>
      <Text style={styles.buttonText1}>
      SAVE
      </Text>
      </TouchableOpacity>
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor:'#fff',
  },


  logo: {
    margin:30,
    height: 220,
    width: '100%',
    

  },

    header:{
width:'60%',
height:'8%',
fontSize:27,
fontWeight:'500',
color:'#7A8727',
left: -40,
margin:15,


  },

  line:{
    width:50,
    height:4,
    borderRadius:15,
    left: -105, 
    marginBottom:50,
    backgroundColor:'#DB944B',


  },

  emailInput:{
width:'80%',
marginBottom:20,

  },

   passwordInput:{
width:'80%',
marginBottom:30,

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