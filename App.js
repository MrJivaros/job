import React from 'react';
import {StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Home from './screen/HomeScreen';
import Quiz from './screen/QuizScreen';
import Profil from './screen/ProfilScreen';

const {Navigator,Screen} = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown:false}} />
        <Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
        <Screen name="Profil" component={Profil} options={{headerShown:false}} />
      </Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#363636"
  }
})




