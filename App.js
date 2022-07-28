/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 
{
SafeAreaView,
View,
StyleSheet}
 from 'react-native';
 

import Navigation from './src/navigation';

const App=()=>{
  return(
    <SafeAreaView style={style.root}>
      
    <Navigation/>
    
    
    </SafeAreaView>
    
  )
}
export default App;

const style=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC',
    margin:6,
    justifyContent:'center'
        
  }
})
