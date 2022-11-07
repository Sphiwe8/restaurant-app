import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';




export default function Home() {


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Log in")
      })
      .catch(error => alert(error.message))
  }

  const burger1 = () => {
    navigation.navigate('Burger1');
  };

  const burger2 = () => {
    navigation.navigate('Burger2');
  };



  const drinks = () => {
    navigation.navigate('Drinks');
  };

  const drinks1 = () => {
    navigation.navigate('Drinks1');
  };

  const drinks2 = () => {
    navigation.navigate('Drinks2');
  };

  const drinks3 = () => {
    navigation.navigate('Drinks3');
  };

  const foods = () => {
    navigation.navigate('Foods');
  };
  const foods1 = () => {
    navigation.navigate('Foods1');
  };

  const pizza = () => {
    navigation.navigate('Pizza');
  };

  const burgers = () => {
    navigation.navigate('Burgers');
  };

  const navigation = useNavigation()



  return (
    <View style={styles.container}>


      <View style={styles.stretchLogo}>

        <ImageBackground style={styles.logo} source={require('../assets/screen.png')}>
          <Image style={styles.logoutActive} source={require('../assets/active.png')} />
          <TouchableOpacity onPress={handleSignOut}>
            <Image style={styles.logout} source={require('../assets/logout.png')} />
          </TouchableOpacity>

        </ImageBackground>
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
            <TouchableOpacity style={styles.specialButton} >
              <Text style={styles.specials} >
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


          <Card style={[styles.items, styles.shadowProp]}>
            <Image style={styles.itemImg1} source={require('../assets/foods2.png')} />

            <Text style={styles.itemText}>
              Breakfast Promo
            </Text>

            <Text style={styles.itemTextsecond}>
              Bacon & Eggs with Toast
            </Text>


            <Text style={styles.itemTextPrice}>
              R 24.99
            </Text>

            <TouchableOpacity onPress={burger1} style={styles.orderbutton} >
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

            <TouchableOpacity onPress={burger2} style={styles.orderbutton} >
              <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
            </TouchableOpacity>

          </Card>

          <Card style={styles.items}>
            <Image style={styles.itemImg1} source={require('../assets/drink.png')} />

            <Text style={styles.itemText}>
              Orange Juice
            </Text>

            <Text style={styles.itemTextsecond}>
              70% Squeezed oranges
            </Text>


            <Text style={styles.itemTextPrice}>
              R 12.99
            </Text>

            <TouchableOpacity onPress={drinks1} style={styles.orderbutton} >
              <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
            </TouchableOpacity>

          </Card>

          <Card style={styles.items}>
            <Image style={styles.itemImg1} source={require('../assets/icecream.png')} />

            <Text style={styles.itemText}>
              Chocolate & Vinila
            </Text>

            <Text style={styles.itemTextsecond}>
              Icecream With coco sauce
            </Text>


            <Text style={styles.itemTextPrice}>
              R 9.99
            </Text>

            <TouchableOpacity onPress={drinks2} style={styles.orderbutton} >
              <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
            </TouchableOpacity>

          </Card>

          <Card style={styles.items}>
            <Image style={styles.itemImg1} source={require('../assets/tea.png')} />

            <Text style={styles.itemText}>
              Thai Ice tea
            </Text>

            <Text style={styles.itemTextsecond}>
              Berry Flavour
            </Text>


            <Text style={styles.itemTextPrice}>
              R 22.99
            </Text>

            <TouchableOpacity onPress={drinks3} style={styles.orderbutton} >
              <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
            </TouchableOpacity>

          </Card>

          <Card style={styles.items}>
            <Image style={styles.itemImg1} source={require('../assets/coffee.png')} />

            <Text style={styles.itemText}>
              Coffee
            </Text>

            <Text style={styles.itemTextsecond}>
              Black or Milk
            </Text>


            <Text style={styles.itemTextPrice}>
              R 15.99
            </Text>

            <TouchableOpacity onPress={burger1} style={styles.orderbutton} >
              <Text style={styles.orderbuttonText}>ADD TO ORDER</Text>
            </TouchableOpacity>

          </Card>

          <Card style={styles.items}>
            <Image style={styles.itemImg1} source={require('../assets/icecream.png')} />

            <Text style={styles.itemText}>
              Icecream
            </Text>

            <Text style={styles.itemTextsecond}>
              Vinila & Choclate
            </Text>


            <Text style={styles.itemTextPrice}>
              R 9.99
            </Text>

            <TouchableOpacity onPress={burger2} style={styles.orderbutton} >
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

  stretchLogo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  logo: {
    width: '100%',
    height: 230,

  },

  logoutActive: {
    marginLeft: 30,
    marginTop: 5,
  },

  logout: {
    height: 38,
    width: 38,
    marginBottom: 15,
    paddingLeft: 10
  },

  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    margin: 8,
    marginTop: 'auto',
  },



  specialButton: {
    height: 32,
    backgroundColor: '#7A8727',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,


  },

  specials: {
    fontSize: 17,
    marginTop: -3,
    color: '#fff',
  },

  detailsImg: {
    width: 100,
    height: 80,
    margin: 10,
    borderRadius: 10,
  },

  itemImg1: {
    width: 70,
    height: 60,
    margin: 5,
    borderRadius: 10,
  },

  itemText: {
    textAlign: 'center',
    marginTop: -60,
    marginLeft: -20,
    fontSize: 13,
    fontWeight: '400',

  },

  detailsTextAddress: {
    margin: '10%',

    color: '#fff',

  },

  detailsText: {
    textAlign: 'center',
    marginTop: -80,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '700',
  },

  itemTextsecond: {
    textAlign: 'center',
    marginTop: -5,
    marginLeft: 10,
    fontSize: 11,
    fontWeight: '300',

  },

  detailsText: {
    textAlign: 'center',
    marginTop: -80,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  itemTextsecond: {
    textAlign: 'center',
    marginTop: -5,
    marginLeft: 10,
    fontSize: 11,
    fontWeight: '300',


  },

  detailsTextsecond: {
    textAlign: 'center',
    marginTop: -5,
    marginLeft: '28%',
    fontSize: 11,
    fontWeight: '300',
    color: '#fff',

  },

  itemTextPrice: {
    textAlign: 'center',
    marginTop: 5,
    marginLeft: -70,
    color: '#0B6223',
    fontSize: 15,
    fontWeight: '500',
  },

  orderbutton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#7A8727',
    marginLeft: 'auto',
    marginTop: -45,
    marginRight: 20,
    padding: 5,

  },

  orderbuttonText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 6,
    fontSize: 9,
    fontWeight: '800',
    color: '#fff',

  },


  itemsContainer: {
    width: '96%',
    height: '95%',
    marginTop: -15,
    backgroundColor: '#ECE7E7',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',

  },

  details: {
    width: '95%',
    height: 170,
    backgroundColor: '#DB944B',
    marginTop: 25,
    borderRadius: 20,

  },


  items: {
    width: '95%',
    height: 70,
    backgroundColor: '#FFFF',
    margin: 10,
    borderRadius: 10,

  },

  scrollView: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    marginBottom: 20,

  },


  linkSignout: {
    fontSize: 17,
    margin: 10,
    color: '#4DA5C0'
  },
});
