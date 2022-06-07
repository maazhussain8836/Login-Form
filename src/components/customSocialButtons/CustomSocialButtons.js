import React  from 'react'
import { Text, View } from 'react-native'
import CustomButton from '../customButtons/CustomButton'

    const CustomSocialButtons=()=>{
        
const onSignInwithGooglePress=()=>{
    console.warn("Sign Inwith Google")
}

const onSignInwithFacebookPress=()=>{
    console.warn("Sign In with facebook")
}

const onSignInwithApplePress=()=>{
    console.warn("Sign In with Apple")
}


    return (
        <>
        <CustomButton 
        onPress={onSignInwithGooglePress} 
        text='Sign in with Google'
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
        />
    
        <CustomButton
         onPress={onSignInwithFacebookPress} 
         text='Sign in with Facebook'
         bgColor='#E7EAF4'
         fgColor='#4765A9'
         />
    
        <CustomButton
         onPress={onSignInwithApplePress} 
         text='Sign in with Apple'
         bgColor='#e3e3e3'
         fgColor='#363636'
         />
         </>
    )
  }

export default CustomSocialButtons
