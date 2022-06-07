import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SigninScreens/SigninScreen'
import SignUpScreen from '../screens/signupScreens/SignUpScreen';
import ConfirmEmailScreen from '../screens/confirmEmailScreen/ConfirmEmailScreen';
import ResetPasswordScreen from '../screens/resetPasswordScreen/ResetPasswordScreens';
import NewPasswordScreen from '../screens/newPasswordScreen/NewPasswordScreens';
import HomeScreen from '../screens/homeScreen';

const Stack = createNativeStackNavigator()
const Navigation=()=> {
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


export default Navigation
