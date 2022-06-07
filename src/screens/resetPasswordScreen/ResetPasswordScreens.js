import React,{useState} from 'react';
import { Text, View,Image, ScrollView,StyleSheet } from 'react-native';
// import {Logo} from '../../../Assets/Images/logo_1.png' 
import CustomInput from '../../components/custominputs/Custominput'
import CustomButton from '../../components/customButtons/CustomButton';
import MainHeading from '../../components/customHeadings/MainHeading'
import { useNavigation } from '@react-navigation/native';




const ResetPasswordScreen=()=>{
const[username,setUsername]=('')    
const navigation=useNavigation();

const onSendPress=()=>{
    navigation.navigate('NewPassword')
}

const onBackToSignInPress=()=>{
    navigation.navigate('SignIn')
}

return(
    <ScrollView>
    <View>
    
    
    <MainHeading 
     heading='Reset Your Password'
     headColor={'gray'}
    />
    
    <CustomInput 
    placeholder='Enter your Username' 
    value={username} 
    setValue={setUsername}
    />



    <CustomButton
     onPress={onSendPress} 
     text="SEND" 
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
export default ResetPasswordScreen
    