import React,{useState} from 'react';
import { Text, View,Image, ScrollView,StyleSheet } from 'react-native';
// import {Logo} from '../../../Assets/Images/logo_1.png' 
import CustomInput from '../../components/custominputs/Custominput'
import CustomButton from '../../components/customButtons/CustomButton';
import MainHeading from '../../components/customHeadings/MainHeading'
import { useNavigation } from '@react-navigation/native';




const ConfirmEmailScreen=()=>{
const[confirmCode,setConfirmCode]=('')    
const navigation=useNavigation()


const onConfirmPress=()=>{
navigation.navigate('HomeScreen')
}


const onResendCodePress=()=>{
    console.warn('Resend Code')
}


const onBackToSignInPress=()=>{
    navigation.navigate('SignIn')
}

return(
    <ScrollView>
    <View>
    
    
    <MainHeading 
     heading='Confirm Your Email'
    />
    
    <CustomInput 
    placeholder='Enter your confirmation code' 
    value={confirmCode} 
    setValue={setConfirmCode}
    />


    <CustomButton 
    onPress={onConfirmPress} 
    text='Confirm'
    />

    <CustomButton
     onPress={onResendCodePress} 
     text="Resend Code" 
     type="SECONDARY" 
     fgColor={'#53565A'}
     />
     <CustomButton
     onPress={onBackToSignInPress} 
     text="Back to Sign in" 
     type="TERTIARY" 
     />
    </View>
    </ScrollView>
)
}

const styles=StyleSheet.create({
    textView:{
        margin:5,
        
    },
    text:{
        color:'#FF9694'
    }
})
export default ConfirmEmailScreen
    