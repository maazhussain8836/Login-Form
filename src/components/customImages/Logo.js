import React from 'react'
import { Text, View ,Image,StyleSheet} from 'react-native'
import Logo from '../../../assets/images/physioLogo.png'

const LogoImage=()=>{
    return (
      <View style={[styles.root]}>
        <Image 
        source={Logo}
        style={[styles.logo]}
        resizeMode="contain"
        />
        
      </View>
    )
  }

const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        padding:100
                
    },
    logo:{
        // marginVertical:40,
        width:'100%',
        maxWidth:200,
        maxHeight:200,
        position:'absolute'
    }
})  

export default LogoImage
