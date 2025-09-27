//so basically we can use bottom tab in home and profile screen as they both are main screen 
//and we cant use in editpofile screen as it is sub screen in profile screen and edit profile screen both will have touchable opacity
//and profile wont have touchable opacity for home bcoz bottom tab will guide back automatically to home
import {View,Text,ImageBackground,StatusBar,StyleSheet,TouchableOpacity,Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Context from "../Context/Context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function HomeScreen({navigation}){
    return(
        <ImageBackground source={require("../assets/images/welcomepage.jpg")}
        style={styles.container}>
          <StatusBar  barStyle="light-content" />
        <LinearGradient colors={["#E0D738","#ebe018c7"]}
            style={styles.layout}>
              <View style={styles.logoLayout}>
                <Image source={require("../assets/images/Logo.png")}
                style={styles.logo}
                resizeMode="contain"/>
              
              </View>
        </LinearGradient>
        <View style={{alignItems:"center",marginBottom:75,paddingHorizontal:25}}>
            <Text style={styles.name}>LocalLens</Text>
            <Text style={styles.punchline}>Connect. Share. Belong.</Text>
            <TouchableOpacity style={styles.SignupBtn} onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.Signtext}>Sign-Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Login} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.Logintext}>Login</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
)}
const styles= StyleSheet.create({
    logoLayout:{
      backgroundColor:"#000000ff",
      padding:20,
      borderRadius:70,
      justifyContent:"center",
      alignContent:"center",
      shadowColor:"#000000d2",
      shadowOpacity:0.6,
      shadowOffset:{width:0,height:6},
      shadowRadius:5,
      marginTop:80,
    },
    logo:{
      width: 120,
      height:120,
      resizeMode:"contain"
    },
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    layout:{
        ...StyleSheet.absoluteFillObject,
    },
    name:{
        color:"#5a560f62",
        fontSize:40,
        fontWeight:"900",
        fontFamily: "RalewayBold"
    },
    punchline: {
        color:"#eeeddbfe",
        fontSize:20,
        fontWeight:"700",
        fontFamily:"ItaliannoRegular"
    },
    SignupBtn:{
    backgroundColor: "#fac804fb", 
    paddingVertical: 18,
    paddingHorizontal: 88,
    borderRadius: 26,
    marginBottom: 18,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation:5,
    },
    Login: {
    backgroundColor: "#fac804fb", 
    paddingVertical: 18,
    borderRadius: 26,
    marginBottom: 18,
    paddingHorizontal: 88,
    shadowRadius: 8,
    shadowColor: "#0b0000ff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    },
    Signtext: {
    color: "#0c0f14ff",
    fontSize: 25,
    fontWeight: "600",
  },
    Logintext: {
    color: "#0c0f14ff",
    fontSize: 25,
    fontWeight: "600",
  },
})

 