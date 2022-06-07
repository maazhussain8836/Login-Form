import React,{useState} from 'react';
import { Text, View,Image, ScrollView,StyleSheet } from 'react-native';
// import {Logo} from '../../../Assets/Images/logo_1.png' 
import CustomInput from '../../components/custominputs/Custominput'
import CustomButton from '../../components/customButtons/CustomButton';
import MainHeading from '../../components/customHeadings/MainHeading'
import CustomSocialButtons from '../../components/customSocialButtons/CustomSocialButtons';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen=()=>{
const[Username,setUsername]=('')    
const[Password,setPassword]=('')

const navigation=useNavigation()

const onRegisterPress=()=>{
navigation.navigate('ConfirmEmail')
}


const onAccountCreatePress=()=>{
    console.warn("Account create")
}

const onPressPrivacyPolicy=()=>{
    console.warn("PrivacyPolicy")
}


const onPressTermsOfUse=()=>{
    console.warn("TermsOfUse")
}

return(
    <ScrollView>
    <View>
    
    
    <MainHeading 
     heading='Create an account'
    />
    
    <CustomInput 
    placeholder='Username' 
    value={Username} 
    setValue={setUsername}
    />

    <CustomInput 
    placeholder='Email' 
    value={Username} 
    setValue={setUsername}
    />

    <CustomInput 
    placeholder='Password' 
    value={Password} 
    setValue={setPassword} 
    secureTextEntry={true}
    />

    <CustomInput 
    placeholder='Repeat Password' 
    value={Password} 
    setValue={setPassword} 
    secureTextEntry={true}
    />

    <CustomButton 
    onPress={onRegisterPress} 
    text='Register'
    />

    <View style={[styles.textView]} >
    <Text >By registering , you confirm that you accept our <Text style={[styles.text]} onPress={onPressTermsOfUse}>Terms of use </Text> and <Text style={[styles.text]} onPress={onPressPrivacyPolicy}>Privacy policy.</Text>
    </Text>
    </View>
    
    <CustomSocialButtons/>

    <CustomButton
     onPress={onAccountCreatePress} 
     text="Have an account? Sign in" 
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
export default SignUpScreen
    