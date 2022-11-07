import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

// You can import from local files


// or any pure javascript modules available in npm


export default function Pizza({ navigation }) {



  const drinks = () => {
    navigation.navigate('Drinks');
  };

const foods = () => {
    navigation.navigate('Foods');
  };

const pizza = () => {
    navigation.navigate('Pizza');
  };

  const pizza1 = () => {
    navigation.navigate('Pizza1');
  };

  const pizza2 = () => {
    navigation.navigate('Pizza2');
  };

  const pizza3 = () => {
    navigation.navigate('Pizza3');
  };

  const pizza4 = () => {
    navigation.navigate('Pizza4');
  };

const burgers = () => {
    navigation.navigate('Burgers');
  };

  const specials = () => {
    navigation.navigate('Home');
  };

  


  return (
    <View style={styles.container}>

    
     <View style={styles.stretchLogo}>
     
      <Image style={styles.logo} source={require('../assets/pizza.png')}>
        
      

      </Image>
       </View>

      

       <View style={styles.itemsContainer} >

       <View style={styles.details}>
       <Image style={styles.detailsImg} source={require('../assets/icon.png')} />
       <Text style={styles.detailsText}>
    Resto Foods
    </Text>

     <Text style={styles.detailsTextsecond}>
    open from 8:00 till 16:00 Weekdays
    </Text>




 <Text style={styles.detailsTextAddress} >
 Long Street 1350, Kimberley
 </Text> 


   <View style={styles.textContainer}>
      <TouchableOpacity  onPress={specials}>      
<Text style={styles.link} >
      Specials
      </Text>
</TouchableOpacity>

<TouchableOpacity onPress={burgers}>      
<Text style={styles.link}>
      Burgers
      </Text>
</TouchableOpacity >

<TouchableOpacity onPress={pizza} style={styles.specialButton}>      
<Text style={styles.specials}>
      Pizza
      </Text>
</TouchableOpacity>

<TouchableOpacity onPress={foods}>      
<Text style={styles.link}>
      Foods
      </Text>
</TouchableOpacity>

<TouchableOpacity onPress={drinks}>      
<Text style={styles.link}>
      Drinks
      </Text>
</TouchableOpacity>
</View>


       </View>


<ScrollView style={styles.scrollView}>
       <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza3.png')} />

    <Text style={styles.itemText}>
    Cheese Farm
    </Text>

    <Text style={styles.itemTextsecond}>
    with Saucage Topping
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 109.99
    </Text>

  <TouchableOpacity onPress={pizza1}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza2.png')} />

    <Text style={styles.itemText}>
    Fresh Crusty Pizza
    </Text>

    <Text style={styles.itemTextsecond}>
    With pineapple and mushroom
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 99.99
    </Text>

  <TouchableOpacity onPress={pizza2}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza3.png')} />

    <Text style={styles.itemText}>
    Hawiian Pizza
    </Text>

    <Text style={styles.itemTextsecond}>
    With large Cold drink
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 119.99
    </Text>

  <TouchableOpacity onPress={pizza3}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza.png')} />

    <Text style={styles.itemText}>
    Pepperoni Pizza
    </Text>

    <Text style={styles.itemTextsecond}>
    Xtra Pepperoni and cheese 
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 99.99
    </Text>

  <TouchableOpacity onPress={pizza4}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

        <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza.png')} />

    <Text style={styles.itemText}>
    Margherita Pizza
    </Text>

    <Text style={styles.itemTextsecond}>
    with chillies 
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 87.99
    </Text>

  <TouchableOpacity onPress={pizza1}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

        <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/pizza.png')} />

    <Text style={styles.itemText}>
    Meat Pizza
    </Text>

    <Text style={styles.itemTextsecond}>
    Chicken or Beef 
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 218.99
    </Text>

  <TouchableOpacity onPress={pizza2}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

    

        

 





        </ScrollView>

       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    
    padding: 8,
  },

  stretchLogo:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
  },

  logo:{
width:'100%',
height:230,

},

textContainer: {
  justifyContent: 'space-between',
  flexDirection: 'row',

  margin:8,
  marginTop:'auto',
},

specialButton:{
height:32,
backgroundColor:'#7A8727',
borderTopRightRadius:10,
borderBottomLeftRadius:10,
 

},

specials:{
fontSize:17,
marginTop:-3,
color:'#fff',
},




detailsImg:{
width:100,
height:80,
margin:10,
borderRadius:10,
},

itemImg1:{
width:70,
height:60,
margin:5,
borderRadius:10,
},

itemText:{
textAlign:'center',
marginTop:-60,
marginLeft: -20,
fontSize:13,
fontWeight:'400',

},

detailsTextAddress:{
margin:'10%' ,
color:'#fff',

},

detailsText:{
textAlign:'center',
marginTop:-80,
marginLeft: 40,
fontSize:20,
fontWeight:'700',
color:'#fff',
},

itemTextsecond:{
textAlign:'center',
marginTop: -5,
marginLeft: 10,
fontSize:11,
fontWeight:'300',

},

detailsTextsecond:{
textAlign:'center',
marginTop: -5,
marginLeft: '28%',
fontSize:11,
fontWeight:'300',
color:'#fff',

},

detailsTextThird:{
marginTop:40,
fontSize:13,
fontWeight:'400',
marginRight:'auto',
paddingTop:'20%',
marginLeft:'10%',
flexDirection:'columb',

},

itemTextPrice:{
textAlign:'center',
marginTop: 5,
marginLeft: -70,
color:'#0B6223',
fontSize:15,
fontWeight:'500',
},

orderbutton:{
width: 80,
height: 30,
borderRadius:20,
backgroundColor:'#7A8727',
marginLeft:'auto',
marginTop:-45,
marginRight:20,
padding:5,

},

orderbuttonText:{
textAlign:'center',
alignSelf:'center',
marginTop:6,
fontSize:9,
fontWeight:'800',
color:'#fff',

},


itemsContainer:{
width:'96%',
height:'95%',
marginTop:-15,
backgroundColor:'#ECE7E7',
borderTopRightRadius: 25,
borderTopLeftRadius: 25,
alignSelf:'center',
alignItems:'center',

},

details:{
width:'95%',
height: 170,
backgroundColor:'#DB944B',
marginTop:25,
borderRadius:20,

},
  

items:{
width:'95%',
height:70,
backgroundColor:'#FFFF',
margin:10,
borderRadius:10,

},

  scrollView: {
    width:'100%',
    height:'30%',
    backgroundColor:'#fff',
    marginBottom:30,
    
  },

});