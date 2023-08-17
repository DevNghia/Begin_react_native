import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Blog from '../screens/TopPage/items/Blog';
import Scan from '../screens/TopPage/items/Scan';
import HomeScreen from '../screens/TopPage/items/Home';
import SettingsScreen from '../screens/TopPage/items/setting';
import AllStackNavigator from './AllStackNavigator';
import HoatDong from '../screens/HoatDong/HoatDong';
import SucKhoe from '../screens/SucKhoe/SucKhoe';
import ThucDon from '../screens/ThucDon/ThucDon';
import LoiNhan from '../screens/LoiNhan/LoiNhan';

const MainNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TabHome') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Hoạt động') {
            iconName = focused ? 'calendar-sharp' : 'calendar-outline';
          } else if (route.name === 'TabSucKhoe') {
            iconName = focused ? 'shield' : 'shield-outline';
          } else if (route.name === 'TabThucDon') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'TabLoiNhan') {
            iconName = focused ? 'newspaper-sharp' : 'newspaper-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      {/* <Tab.Screen name="Hoạt động" component={HoatDong} /> */}

      <Tab.Screen
        name="TabHome"
        component={AllStackNavigator}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
        initialParams={{
          initialRouteName: 'Home',
        }}
      />
      <Tab.Screen
        name="TabSucKhoe"
        component={AllStackNavigator}
        options={{
          tabBarLabel: 'Sức khỏe',
        }}
        initialParams={{
          initialRouteName: 'SucKhoe',
        }}
      />
      <Tab.Screen
        name="TabThucDon"
        component={AllStackNavigator}
        options={{
          tabBarLabel: 'Thực đơn',
        }}
        initialParams={{
          initialRouteName: 'ThucDon',
        }}
      />
      <Tab.Screen
        name="TabLoiNhan"
        component={AllStackNavigator}
        options={{
          tabBarLabel: 'Lời nhắn',
        }}
        initialParams={{
          initialRouteName: 'LoiNhan',
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
