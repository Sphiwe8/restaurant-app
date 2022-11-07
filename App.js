import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Welcome from './components/WelcomePage';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Order from './components/Order';
import OrderDetails from './components/OrderDetails';
import Location from './components/Location';


import Pizza from './components/Pizza';
import Pizza1 from './items/Pizza1';
import Pizza2 from './items/Pizza2';
import Pizza3 from './items/Pizza3';
import Pizza4 from './items/Pizza4';


import Burgers from './components/Burgers';
import Burger1 from './items/Burger1';
import Burger2 from './items/Burger2';
import Burger3 from './items/Burger3';
import Burger4 from './items/Burger4';


import Foods from './components/Foods';
import Foods1 from './items/Foods1';


import Drinks from './components/Drinks';
import Drinks1 from './items/Drinks1';
import Drinks2 from './items/Drinks2';
import Drinks3 from './items/Drinks3';
import Drinks4 from './items/Drinks4';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




// You can import from local files

const Stack = createNativeStackNavigator();

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator>

       <Stack.Screen name="WelcomePage" options={{headerShown:false}} component={Welcome} />

        <Stack.Screen options={{ headerShown: false }} name="Log in" component={Login} />


        <Stack.Screen name="Sign up" options={{headerShown:false}} component={Signup} />



        <Stack.Screen name="Home"  options={{headerShown:false}} component={Home} />

        <Stack.Screen name="Location" component={Location} />

        <Stack.Screen name="OrderDetails" component={OrderDetails} />

        <Stack.Screen name="Order" options={{headerShown:false}} component={Order} />

        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen name="Foods1" component={Foods1} />
        <Stack.Screen name="Foods2" component={Foods} />
        <Stack.Screen name="Foods3" component={Foods} />
        <Stack.Screen name="Foods4" component={Foods} />



        <Stack.Screen name="Pizza" component={Pizza} />
        <Stack.Screen name="Pizza1" component={Pizza1} />
        <Stack.Screen name="Pizza2" component={Pizza2} />
        <Stack.Screen name="Pizza3" component={Pizza3} />
        <Stack.Screen name="Pizza4" component={Pizza4} />


        <Stack.Screen name="Burgers" component={Burgers} />
        <Stack.Screen name="Burger1" component={Burger1} />
        <Stack.Screen name="Burger2" component={Burger2} />
        <Stack.Screen name="Burger3" component={Burger3} />
        <Stack.Screen name="Burger4" component={Burger4} />


        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Drinks1" component={Drinks1} />
        <Stack.Screen name="Drinks2" component={Drinks2} />
        <Stack.Screen name="Drinks3" component={Drinks3} />
        <Stack.Screen name="Drinks4" component={Drinks4} />

      </Stack.Navigator>

    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

});
