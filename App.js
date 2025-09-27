import {View,ActivityIndicator,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfileScreen from "./Screens/EditProfile";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SignupScreen from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Italianno_400Regular } from "@expo-google-fonts/italianno";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color,size}) => {
          let iconName;
          if(route.name==='Home'){
            iconName='home';
          } else if(route.name==='Profile'){
            iconName='person';
          } else if(route.name==='Edit Profile'){
            iconName='create';
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Edit Profile" component={EditProfileScreen} />
    </Tab.Navigator>
  );
}
export default function App(){
      const [fontsLoaded] = useFonts({
    RalewayBold: Raleway_700Bold,
    ItaliannoRegular: Italianno_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#2a240cff" />
      </View>
    );
  }
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}
const styles=StyleSheet.create({
  tabBar:{
    backgroundColor:"#052f06d3",
    height:60,
    borderTopColor:"#000000ff",
    borderTopWidth:0.6,

  },
  tabLabel:{
    fontSize:10,
    fontWeight:"800",
  },
  
});
