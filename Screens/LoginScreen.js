import {View,Text,TouchableOpacity,Alert,StatusBar,ImageBackground,TextInput,StyleSheet} from "react-native";
import React from "react";
import { useState,useContext } from "react";
import {userContext} from "../Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen({navigation}){
    const {setUser} = useContext(userContext);
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const loginWithEmailAndPass = async () =>{ 
        if(!email || !password){
            return Alert.alert("Error","Please enter the credentials")
        }
        try{
          const userData = await AsyncStorage.getItem("user_profile");
          if(!userData){
            return Alert.alert("Error","No user found.please signup.");
            
          }
          const user =JSON.parse(userData);
          if(user.email===email && user.password===password){
            await AsyncStorage.setItem("logged_in","true");
            setUser(user);
            Alert.alert("Success","Welcome back");
            navigation.navigate("HomeScreen");//this helped me to create bottom tab in login page for signup and home screen since signup and home are in main tabs
          } else{
            Alert.alert("Error","Incorrect email or password");
          }
        } catch(err){
          console.log(err);
          Alert.alert("Error","Something is wrong");
        }
      };


        return(
        <ImageBackground source={require("../assets/images/Login.png")}
        style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.header}>Local connections, made simple.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"/>
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          />
        
        <TouchableOpacity style={styles.LoginBtn} onPress={loginWithEmailAndPass}>
          <Text style={styles.SignText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignupBtn} onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.LoginText}>
            Don't have an account? <Text style={{ color: "#033403ff", fontWeight: "600" }}>Sign up</Text>
            </Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        );
        }
  const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    LoginText:{
        color:"#5a560f90",
        fontSize:32,
        fontWeight:"800"
    },
    SignText: {
        color:"#eeeddbfe",
        fontWeight:"400",
        fontSize:32,
    },
    SignupBtn:{
    backgroundColor: "#1d530763", 
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 26,
    marginBottom: 18,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    },
    LoginBtn: {
    backgroundColor: "#1d530763", 
    paddingVertical: 18,
    borderRadius: 26,
    marginBottom: 18,
    paddingHorizontal: 18,
    shadowRadius: 8,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    },
    heading: {
    fontSize: 29,
    fontWeight: "900",
    color: "#021024d2",
    marginBottom: 10,
    fontFamily: "RalewayBold",
  },
    header: {
    fontSize: 16,
    color: "#021024d2",
    marginBottom: 30,
    fontWeight: "700",
  },
})