import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main/main';
import Login from './screens/Login/login';
import ForgotPassword from './screens/ForgotPassword/fogotpassword';
import Register from './screens/Register/register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './utils/modules';
import * as NavigationService from './utils/modules';
import MainNavigator from './navigators/MainNavigator';

const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const SlideDraw=()=>{
    return(
      <Drawer.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >
      <Drawer.Screen name="Mains" component={MainStack} />
      {/* <Drawer.Screen name="Notifications" component={SettingsScreen} /> */}
    </Drawer.Navigator>
    )
  }
  const MainStack = ({ navigation, route }) => {
    const [isShow, setIsShow] = useState(true);
    useEffect(
      () => {
        if (NavigationService.getCurrentRoute() === "Gift") {
          setIsShow(false);
        } else {
          if (!isShow) {
            setIsShow(true);
          }
        }
      },
      [route]
    );
  
    return (
      <View style={{ flex: 1 }}>
        {/* {isShow && <HeaderApp navigation={navigation} />} */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={MainNavigator} />
          {/* <Stack.Screen name="Web" component={MainNavigator} /> */}
        </Stack.Navigator>
      </View>
    );
  };
const AppContent = () => {
    return (
      <NavigationContainer ref={navigationRef}>
       
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SlideDraw" component={SlideDraw} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          
        </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
  
  export default AppContent;