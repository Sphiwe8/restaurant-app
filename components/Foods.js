import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
// You can import from local files


// or any pure javascript modules available in npm


export default function Foods() {

  const item = () => {
    navigation.navigate('Item');
  };

  const drinks = () => {
    navigation.navigate('Drinks');
  };

const foods = () => {
    navigation.navigate('Foods');
  };
  const foods1 = () => {
    navigation.navigate('Foods1');
  };
  const foods2 = () => {
    navigation.navigate('Foods2');
  };
  
  const foods3 = () => {
    navigation.navigate('Foods3');
  };

   const foods4 = () => {
    navigation.navigate('Foods4');
  };

const pizza = () => {
    navigation.navigate('Pizza');
  };

const burgers = () => {
    navigation.navigate('Burgers');
  };

  const specials = () => {
    navigation.navigate('Home');
  };

  const navigation = useNavigation()


  return (
    <View style={styles.container}>

    
     <View style={styles.stretchLogo}>
     
      <Image style={styles.logo} source={require('../assets/foods.png')}>
        
      

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
      <TouchableOpacity onPress={specials} >      
<Text  style={styles.link}>
      Specials
      </Text>
</TouchableOpacity>

<TouchableOpacity onPress={burgers}>      
<Text style={styles.link}>
      Burgers
      </Text>
</TouchableOpacity >

<TouchableOpacity onPress={pizza}>      
<Text style={styles.link}>
      Pizza
      </Text>
</TouchableOpacity>

<TouchableOpacity onPress={foods} style={styles.specialButton}>      
<Text  style={styles.specials}>
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
    <Image style={styles.itemImg1} source={require('../assets/foods1.png')} />

    <Text style={styles.itemText}>
    Breakfast Delight
    </Text>

    <Text style={styles.itemTextsecond}>
    With fish, eggs and rice
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 21.99
    </Text>

  <TouchableOpacity onPress={foods1}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/foods2.png')} />

    <Text style={styles.itemText}>
    Breakfast Promo
    </Text>

    <Text style={styles.itemTextsecond}>
    2 eggs, toast and Bacon
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 29.99
    </Text>

  <TouchableOpacity onPress={foods2}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/foods3.png')} />

    <Text style={styles.itemText}>
    Pancakes with honey
    </Text>

    <Text style={styles.itemTextsecond}>
    Small or Medium Pancakes
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 49.99
    </Text>

  <TouchableOpacity onPress={foods3}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

           <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/steak.png')} />

    <Text style={styles.itemText}>
    Premium Rare Double
    </Text>

    <Text style={styles.itemTextsecond}>
    Special Steak 
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 119.99
    </Text>

  <TouchableOpacity onPress={foods4}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

        <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/steak.png')} />

    <Text style={styles.itemText}>
    Large Steak
    </Text>

    <Text style={styles.itemTextsecond}>
    with Medium Chips
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 139.99
    </Text>

  <TouchableOpacity onPress={foods1}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

        <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/steak.png')} />

    <Text style={styles.itemText}>
    Steaky steak with merronate
    </Text>

    <Text style={styles.itemTextsecond}>
    BBQ sauce or honey 
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 134.99
    </Text>

  <TouchableOpacity onPress={foods2}  style={styles.orderbutton} >
    <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
    </TouchableOpacity>

        </Card>

        <Card style={styles.items}>
    <Image style={styles.itemImg1} source={require('../assets/steak.png')} />

    <Text style={styles.itemText}>
    Medium BBQ Rib
    </Text>

    <Text style={styles.itemTextsecond}>
    with side of Salad
    </Text>

    
    <Text style={styles.itemTextPrice}>
    R 109.99
    </Text>

  <TouchableOpacity onPress={foods3}  style={styles.orderbutton} >
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
    marginBottom:20,
    
  },

});