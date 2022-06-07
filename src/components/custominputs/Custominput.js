import React from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'

 const CustomInput=({value,setValue,placeholder,secureTextEntry})=>{
     return(
         <View style={styles.container}>
         <TextInput placeholder={placeholder}
         value={value}
         onChangeText={setValue}
         secureTextEntry={secureTextEntry}
        style={styles.input} ></TextInput>

         </View>
     )
 }
 
const styles=StyleSheet.create({
    container:{
    backgroundColor:'white',
    borderColor:'#e8e8e8',
    margin:5,
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:10
    },
    input:{},
}) ;
export default CustomInput 