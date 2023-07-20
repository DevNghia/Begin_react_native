import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Blog from '../screens/TopPage/items/Blog';
import Scan from '../screens/TopPage/items/Scan';
import HomeScreen from '../screens/TopPage/items/Home';
import SettingsScreen from '../screens/TopPage/items/setting';
import AllStackNavigator from './AllStackNavigator';

const MainNavigator = () =>{

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }else if (route.name === 'TabBlog'){
                iconName = focused ? 'md-book' : 'md-book-outline';
              }else if (route.name === 'Scan'){
                iconName = focused ? 'qr-code' : 'qr-code-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="TabBlog" component={AllStackNavigator}
          options={{
            tabBarLabel: "Blog",
          }}
          initialParams={{
            initialRouteName: "Blog"
          }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Scan" component={Scan} />
        </Tab.Navigator>
    
      );
    };
    export default MainNavigator;