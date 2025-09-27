import React from "react";
import {View,Text,StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {userContext} from "../Context/Context";
import {useContext} from "react";
import { Ionicons } from "@expo/vector-icons";
export default function ProfileScreen({navigation}){
    const {user} = useContext(userContext);
    if(!user){
        return (
        <View style={styles.centered}>
            <Text style={styles.inText}>No user data is available</Text>
        </View>
        );
        }return(
        <ImageBackground source={require("../assets/images/profile.png")}
        style={styles.profile}>
            <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate("EditProfile")}>
                <Ionicons name="create" size={24} color="#fcfcfcff" />
            </TouchableOpacity>
        <View style={styles.profileCard}>
        {user.profilePic && (
          <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        )}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.info}>Email: {user.email}</Text>
        <Text style={styles.info}>Contact: {user.contact}</Text>
            
        </View>
        </ImageBackground>
        );
}
const styles=StyleSheet.create({
    profile : {
        flex: 1,
        paddingTop:60,
        alignItems: "center",
    },
    editBtn: {
        position:"absolute",
        top:40,
        left:20,
        backgroundColor:"#50100454",
        padding:10,
        borderRadius:30,
        elevation:5,
    },
    profileCard: {
    marginTop: 60,
    backgroundColor: "#02422454",
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
    profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
    name: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },
    info: {
    fontSize: 18,
    marginBottom: 5,
  },
    centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    inText: {
    fontSize: 18,
    color: "#555",
  },
});
