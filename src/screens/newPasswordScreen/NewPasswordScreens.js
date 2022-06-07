import React,{useState} from 'react';
import { Text, View,Image, ScrollView,StyleSheet } from 'react-native';
// import {Logo} from '../../../Assets/Images/logo_1.png' 
import CustomInput from '../../components/custominputs/Custominput'
import CustomButton from '../../components/customButtons/CustomButton';
import MainHeading from '../../components/customHeadings/MainHeading'
import { useNavigation } from '@react-navigation/native';




const NewPasswordScreen=()=>{
const[username,setUsername]=('')  
const[NewPassword,setNewPassword]=('')    

const navigation=useNavigation();
const onSubmitPress=()=>{
    navigation.navigate('HomeScreen')
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
    placeholder='Enter your Code' 
    value={username} 
    setValue={setUsername}
    />

    
<CustomInput 
    placeholder='Enter your New Password' 
    value={NewPassword} 
    setValue={setNewPassword}
    />


    <CustomButton
     onPress={onSubmitPress} 
     text="SUBMIT" 
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
export default NewPasswordScreen
    