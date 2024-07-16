import { View, Text ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors'

import {useRouter} from 'expo-router'


export default function Login() {

     const router= useRouter();
  return (

    <View>
      <Image source ={require('./../assets/images/image1.jpg')}
     style ={{
      width :'100%',
      height :450
     }}
     
     />
     <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:10


      }}> AI Travel Planner</Text>
      <Text style={{
        fontSize: 16,
        fontFamily:'outfit',
        textAlign:'center',
        color:Colors.GRAY,
        marginTop:20

      }}>
        discover your next adventure effortlessy ,personalized itineraries at your fingertips,travel smarter with AI-driven insights'.
      </Text>
      <TouchableOpacity style={styles.button}

      onPress={()=>router.push('auth/sign-in')}
      >
      <Text style={{
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit-bold',
        fontSize:20,
       

      }}>Get Started</Text></TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    margineTop:-20,
    height:'100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25,
    
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    color:Colors.PRIMARY,
    padding:15,
    borderRadius:99,
    textAlign:'center',
    fontSize:16,
    fontFamily:'outfit-bold',
    marginTop:'10%'
  }
})