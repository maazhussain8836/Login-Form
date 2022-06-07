import React from 'react'
import { Text, View,StyleSheet,Pressable } from 'react-native'
const CustomButton=({onPress,text,type="PRIMARY",bgColor,fgColor})=>{
    return (
        
        <View>
        <Pressable 
        onPress={onPress} 
         style={[style.container, 
         style[`container_${type}`],
         bgColor ? {backgroundColor:bgColor}:{}
            // if bgcolor is given ,apply backgroundColor to bgColor else do nothing
        ]}>
             
        <Text 
         style={[style.text, style[`text_${type}`],
         fgColor ? {color:fgColor}:{}
         // if fgcolor/text color is given ,change text Color to fgColor else do nothing
        ]}>
         
        {text}
        </Text>     
        </Pressable>
        </View>            
        
      )
}

const style=StyleSheet.create({
    container:{
        
        padding:15,
        alignItems:'center',
        marginVertical:5,
        margin:3 ,
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        
    },

    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_TERTIARY:{
        borderColor:'white'
    },
    container_SECONDARY:{
        backgroundColor:'#E6E6E3'
    },
    
    text:{
        fontWeight:'bold',
        color:'white',

    },
    text_PRIMARY:{},
    text_SECONDARY:{},
    text_TERTIARY:{
        color:'gray'
    }
    

})
export default CustomButton
