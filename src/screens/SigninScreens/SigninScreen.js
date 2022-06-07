import React,{useState} from 'react';
import { Text, View,Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/custominputs/Custominput'
import CustomButton from '../../components/customButtons/CustomButton';
import LogoImage from '../../components/customImages/Logo';

const SignInScreen=()=>{

const navigation=useNavigation();

const[Username,setUsername]=('')    
const[Password,setPassword]=('')

const onSignInPress=()=>{
navigation.navigate('HomeScreen')
}

const onForgotPasswordPress=()=>{
navigation.navigate('ResetPassword')    
}

const onSignInwithGooglePress=()=>{
    console.warn("Sign Inwith Google")
}

const onSignInwithFacebookPress=()=>{
    console.warn("Sign In with facebook")
}

const onSignInwithApplePress=()=>{
    console.warn("Sign In with Apple")
}

const onAccountCreatePress=()=>{
    
    navigation.navigate('SignUp')
}

return(
    <ScrollView>
    <View>
    <LogoImage />
    
    <CustomInput 
    placeholder='Username' 
    value={Username} 
    setValue={setUsername}
    />

    <CustomInput 
    placeholder='Password' 
    value={Password} 
    setValue={setPassword} 
    secureTextEntry={true}
    />

    <CustomButton 
    onPress={onSignInPress} 
    text='Sign In'
    />

    <CustomButton 
    onPress={onForgotPasswordPress} 
    text='Forgot Password?' 
    type="TERTIARY" 
    />

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

    <CustomButton
     onPress={onAccountCreatePress} 
     text="Don't have an account? Sign Up" 
     type="TERTIARY" 
     />
    </View>
    </ScrollView>
)
}

export default SignInScreen
    