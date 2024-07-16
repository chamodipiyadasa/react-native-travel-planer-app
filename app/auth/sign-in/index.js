import { View, Text, TextInput ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation,useRouter} from 'expo-router'
import { Colors } from './../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {

  const navigation =useNavigation();
  const router= useRouter();
  useEffect(() => { 
    navigation.setOptions({
     headerShown:false
    
    });
  }, []);
  return (
    <View style={{
      padding: 25,
      paddingTop:40,
      backgroundColor:Colors.WHITE,
      height:'100%'

    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
     
     <Text style={{
      fontFamily: 'outfit-bold',
      fontSize: 30,
      marginTop:30
     }}>Lets Sign You In</Text>
       <Text style={{
      fontFamily: 'outfit',
      fontSize: 30,
      color:Colors.GRAY,
      marginTop: 20
     }}>Welcome Back</Text>
       <Text style={{
      fontFamily: 'outfit',
      fontSize: 30,
      color:Colors.GRAY,
      marginTop: 10
     }}>You've been missed</Text>
{/* email */}
     <View style={{
      marginTop: 50
     }}>
      <Text style={{
        fontFamily: 'outfit',
      
      }}>Email</Text>
      <TextInput style ={style.input} 
      placeholder='Enter your email' />
     </View>
    {/* password */}
     <View style={{
      marginTop: 50
     }}>
      <Text style={{
        fontFamily: 'outfit',
      
      }}>Password</Text>
      <TextInput 
      secureTextEntry={true}
      style ={style.input} 
      placeholder='Enter your password' />
     </View>
{/* Sign-in button */}
     <View style ={{
      padding:20,
      backgroundColor:Colors.PRIMARY,
      borderRadius:15,
      marginTop:50,
      borderWidth:1,
     }}>
<Text style={{
  color:Colors.WHITE,
  textAlign:'center',
  fontFamily:'outfit-bold'

}}
>Sign In</Text>
     </View>
{/* create account */}
<TouchableOpacity 
onPress={()=>router.replace('auth/sign-up')}
style ={{
      padding:20,
      backgroundColor:Colors.WHITE,
      borderRadius:15,
      marginTop:50,
      borderWidth:1,
     }}>
<Text style={{
  color:Colors.PRIMARY,
  textAlign:'center',
  fontFamily:'outfit-bold'

}}
>Create Account</Text>
     </TouchableOpacity>
    </View>
   

    
  )
}

// create account button




const style = StyleSheet.create({
input:{
  padding:15,
  borderWidth:1,
  borderRadius:15,
  borderColor:Colors.GRAY,


}
})