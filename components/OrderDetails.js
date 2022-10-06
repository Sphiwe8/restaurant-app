import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { AwesomeTextInput } from 'react-native-awesome-text-input';

export default function Order({ navigation }) {

    const specials = () => {
        navigation.navigate('Home');
      };
    

  return (



    <View style={styles.container}>



<Text style={styles.itemsName} >
     The Resto Burger Large with Beef & Veggies
     </Text>

     <View style={styles.mainContainer}>

    

 
<View style={styles.textContainer}>


 <Text style={styles.sub}>
  Subtotal
 </Text>

 <Text style={styles.sub}>
 R89.99
 </Text>
 
   </View>

   <View style={styles.textContainer2}>


 <Text style={styles.sub}>
  VAT 15%
 </Text>

 <Text style={styles.sub}>
 R6.20
 </Text>
 
   </View>
   </View>

<View style={styles.textContainer3}>
 <Text style={styles.total}>
Total Amount
 </Text>

 <Text style={styles.total}>
R96.19
 </Text>
</View>







      <TouchableOpacity style={styles.button1} onPress={specials} >
      <Text style={styles.buttonText1}>
     Return to Home
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
    backgroundColor:'#fff',
   
  },

  mainContainer:{
    backgroundColor:'#c1c1c1',
    width:'90%',
    height:'12%',
    
  },

  itemsName:{
    fontSize:22,
    textAlign:'center',
    marginTop:15,
    
    },


textContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    margin:10,

 },

 textContainer2:{
    justifyContent:'space-between',
    flexDirection:'row',
    margin:10,

 },

 textContainer3:{
    justifyContent:'space-between',
    flexDirection:'row',
    margin:15,
    width:'88%',

 },

 total:{
fontSize:18,
 },

 sub:{
color:'#fff',
 },



  button1: {
    margin: 60,
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