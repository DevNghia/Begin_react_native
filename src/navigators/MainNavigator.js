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
    
              if (route.name === 'TabHome') {
                iconName = focused
                  ? 'home-sharp'
                  : 'home-outline';
              } else if (route.name === 'Hoạt động') {
                iconName = focused ? 'calendar-sharp' : 'calendar-outline';
              }else if (route.name === 'Sức khỏe'){
                iconName = focused ? 'shield' : 'shield-outline';
              }else if (route.name === 'Thực đơn'){
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              }else if (route.name === 'Lời nhắn'){
                iconName = focused ? 'newspaper-sharp' : 'newspaper-outline';
              }
              
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
              <Tab.Screen name="Hoạt động" component={Scan} />
              <Tab.Screen name="Sức khỏe" component={Scan} />
              <Tab.Screen name="TabHome" component={AllStackNavigator}
          options={{
            tabBarLabel: "Home",
          }}
          initialParams={{
            initialRouteName: "Home"
          }}
          />
              <Tab.Screen name="Thực đơn" component={Scan} />
              <Tab.Screen name="Lời nhắn" component={Scan} />
          
        </Tab.Navigator>
    
      );
    };
    export default MainNavigator;