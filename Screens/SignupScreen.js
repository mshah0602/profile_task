import {View,Text,Alert,TextInput, ImageBackground,TouchableOpacity,StyleSheet,Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import { useState,useContext } from "react";
import {userContext} from "../Context/Context.js";
import * as ImagePicker from 'expo-image-picker';
export default function SignupScreen({navigation}){
  const { setUser } = useContext(userContext);

  const[name, setName] = useState("");          
  const[contact, setContact] = useState("");    
  const[profilePic, setProfilePic] = useState(null);  
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  const[confirmPassword,setConfirmPassword]= useState("");
                  const pickImage = async () => {
                  
                  let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                  });
                  console.log(result);

                  if (!result.canceled) {
                    setProfilePic(result.assets[0].uri);
                  }
                };
        const handleSignup= async () =>{
          
        if(!email || !password || !confirmPassword || !contact || !name || !profilePic){
          return Alert.alert("Error","Please enter all credentials")
        }
        if (password !== confirmPassword) {
         return Alert.alert("Error", "Password does not match");
        }
        if (password.length < 6) {
          return Alert.alert("Error", "Password must be at least 6 characters");
        }
        //https://docs.expo.dev/versions/latest/sdk/imagepicker/
        //for expo image picker
        const userData={name,email,contact,profilePic,password};
        try{
          await AsyncStorage.setItem('user_profile',JSON.stringify(userData));
          setUser(userData);
          Alert.alert("Success","User successfully has been created.");
          navigation.navigate("LoginScreen");
        } 
        catch(error) {
        console.log(error);
        Alert.alert("Error","Failed to save user data");
      }};
        return(
        <ImageBackground source={require("../assets/images/Login.png")}
        style={styles.container}>
        <View style={styles.innerContainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.header}>Join your neighborhood community</Text>
        {profilePic && 
        <Image source={{ uri: profilePic }} style={styles.image} />}
          <Text style={{color:'#0c0f14ff'}}>Upload Profile Picture</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"/>
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contact}
          keyboardType="numeric"
          onChangeText={setContact}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={setConfirmPassword}
          />
        
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text style={styles.SignText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Login } onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginText}>
            Already have an account?{""} 
            <Text style={{ color: "#033403ff", fontWeight: "800" }}>Log in
                </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn} onPress={pickImage}>
              <Text style={{ color: "#000000ff" }}>Upload Profile Picture</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
              );
              }
const styles= StyleSheet.create({
    innerContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    heading: {
      fontSize: 29,
      fontWeight: "900",
      color: "#021024d2",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "RalewayBold"
    },
    header: {
      fontSize: 16,
      color: "#021024d2",
      marginBottom: 30,
      fontWeight:"700"
    },
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    loginText:{
        color:"#eeeddbfe",
        fontSize:20,
        fontWeight:"400",
        fontFamily:"RalewayBold"
    },
    SignText: {
        color:"#eeeddbfe",
        fontWeight: "400",
        fontSize: 20,
        fontFamily:"RalewayBold"
    },
    image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf:"center"
    },
    signupBtn:{
    backgroundColor: "#1c530754", 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 26,
    marginBottom: 18,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation:6,
    alignItems: "center",
    },
    Login: {
    backgroundColor: "#1c530754", 
    paddingVertical: 14,
    borderRadius: 26,
    marginBottom: 18,
    paddingHorizontal: 24,
    shadowRadius: 8,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    alignItems:"center",
    
    },
  input: {
  backgroundColor: "#ffffffc1",
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius: 10,
  marginBottom: 18,
  fontSize: 16,
  color: "#000000ea"
}
  
})

