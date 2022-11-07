import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm


export default function Pizza3({navigation}) {

  const drinks = () => {
    navigation.navigate('Drinks');
  };
  
    const location = () => {
    navigation.navigate('Location',  {menu:"Hawiian Pizza With large Cold drink"});
  };
  
    const order = () => {
    navigation.navigate('Order');
  };
  

  return (

    <ScrollView>

    <View style={styles.container}>

    
     <View style={styles.stretchLogo}>
      <Image style={styles.logo} source={require('../assets/plank.png')}>

       </Image>
<Image style={styles.itemImage} source={require('../assets/pizza2.png')}/>
       </View>

      

      
 <View style={styles.itemsContainer} >

     <Text style={styles.itemsName} >
     Hawiian Pizza With large Cold drink
     </Text>



<View style={styles.mainContainer}>
<View style={styles.textContainer}>
<Text  style={styles.itemText}>
45min 
</Text >

<Text  style={styles.itemText}>
4.5 
</Text>

<TouchableOpacity onPress={drinks}>
<Text  style={styles.itembtn}>
Add a drink
</Text>
</TouchableOpacity>

</View>
</View>


<Text style={styles.descriptionHeader}>
      DESCRIPTION
      </Text>

<Text style={styles.itemDescription}>
A good steak has an even spread of marbling all over the beef which gives it a beautifully flavor. A steak with high marbling has many monounsaturated fats compared to regular beef and is rich in omega 3 and 6 content. It also contains oleic acid and lower levels of cholesterol, which is good for the heart
</Text>

       </View>

       <View  style={styles.bottomContainer}>

        

      <TouchableOpacity style={styles.button2} onPress={location} >
      <Text style={styles.buttonText2}>
      ORDER NOW
      </Text>
      </TouchableOpacity>
     

       </View>

    </View>

    </ScrollView>
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
height:280,

},

itemImage:{
  marginTop:'-55%',
  borderRadius:20,
width:'80%',
height:200,
},

itemsName:{
fontSize:22,
textAlign:'center',
marginTop:35,


},

itemText:{
fontWeight:'400',
fontSize:16,
margin:10,

marginLeft:15,
},

itembtn:{
  width:100,
height:30,
color:'#fff',
fontWeight:'400',
fontSize:16,
margin:10,
backgroundColor:'#7A8727',
borderRadius:10,
textAlign:'center'

},

  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#DB944B',
    margin:10,
    marginTop:20,
  },

descriptionHeader:{
fontSize:18,
fontWeight:'500',
color:'#0B6223',
marginTop:20,
marginLeft:20,
},

itemDescription:{
fontSize:17,
textAlign:'center',

margin:6,


},

bottomContainer:{
    width:'100%',
    height:200,
    marginTop:'10%',
    backgroundColor:'#7A8727',
    justifyContent:'center',
    
    
    },
    
    
    button2: {
        
    width: 220,
    height: 60,
    backgroundColor:'#428BA1',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:15,
    
      },
    
        buttonText2:{
        textAlign: 'center',
        alignSelf:'center',
      
        fontSize: 19,
        fontWeight:'600',
        color:'#fff'
      },
  




});