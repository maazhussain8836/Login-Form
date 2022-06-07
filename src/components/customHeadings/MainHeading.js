import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const MainHeading=({heading,headColor})=>{
    return (
      <View style={[styles.root]}>
        <Text style={[styles.textStyle,headColor ? {color:headColor}:{}]}
          > {heading} </Text>
      </View>
    )
  }

const styles=StyleSheet.create({
  root:{
    alignItems:'center',
    marginBottom:10
  },
textStyle:{
  
  fontWeight:'bold',
  fontSize:30
  
}  
})
export default MainHeading
