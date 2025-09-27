import React, {useContext} from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,ImageBackground,Alert,} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { userContext } from "../Context/Context";
export default function EditProfileScreen({navigation}){
    const {user,setUser} = useContext(userContext);

    if(!user){
        return(
            <View style={StyleSheet.centered}>
                <Text style={StyleSheet.infoText}> No user data available</Text>
            </View>
        );
    }
    const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'], 
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const updatedUser = { ...user, profilePic: result.assets[0].uri };
        setUser(updatedUser);
        await AsyncStorage.setItem("user_profile", JSON.stringify(updatedUser));
        Alert.alert("Success", "Profile picture updated!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to update profile picture");
    }
  };
  return(
    <ImageBackground
      source={require("../assets/images/profile.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {user.profilePic && (
          <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        )}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.info}>Email: {user.email}</Text>
        <Text style={styles.info}>Contact: {user.contact}</Text>

        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fafafaff",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#0b0505ff",
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
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#14380654",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 26,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    color: "#262525ff",
  },
});