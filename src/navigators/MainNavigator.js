import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AllStackNavigator from './AllStackNavigator';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FloatingAction} from 'react-native-floating-action';
const MainNavigator = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  const actions = [
    {
      text: 'Lời nhắn',
      icon: <Icon name="comment" size={30} color="white" />,
      name: 'LoiNhan',
      position: 2,
      color: '#66FF00',
    },
    {
      text: 'Xin nghỉ',
      icon: <Ionicons name={'newspaper-sharp'} size={30} color={'white'} />,
      name: 'XinNghi',
      position: 1,
      color: '#66FF00',
    },
  ];
  const EmptyScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is an empty screen.</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
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
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: '#33CC33',
          tabBarInactiveTintColor: '#33CC33',
        })}>
        {/* <Tab.Screen name="Hoạt động" component={HoatDong} /> */}

        <Tab.Screen
          name="TabHome"
          component={AllStackNavigator}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarLabelStyle: {color: 'green'},
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
            tabBarLabelStyle: {color: 'green'},
          }}
          initialParams={{
            initialRouteName: 'SucKhoe',
          }}
        />
        {/* <Tab.Screen
          name="FloatingAction"
          component={EmptyScreen}
          options={{
            tabBarLabel: '',
            tabBarLabelStyle: {
              // Tùy chỉnh kiểu dáng của label (nếu có)
              display: 'none', // Ẩn label
            },
            tabBarIconStyle: {
              // Tùy chỉnh kiểu dáng của biểu tượng
              marginBottom: 8, // Điều chỉnh khoảng cách từ trên xuống để đẩy biểu tượng xuống
            },
            // tabBarIcon: () => (
            //   <FloatingAction
            //     actions={actions}
            //     onPressItem={name => {
            //       console.log(`Action ${name} được nhấn`);
            //       if (name === 'LoiNhan') {
            //         navigation.navigate('LoiNhan');
            //       } else if (name === 'XinNghi') {
            //         navigation.navigate('XinNghi');
            //       }
            //     }}
            //     color="#66FF00"
            //     overlayColor="rgba(255, 255, 100, 0.8)"
            //     distanceToEdge={10} // Khoảng cách từ nút đến cạnh màn hình
            //     actionsPaddingTopBottom={10} // Khoảng cách giữa các nút action theo chiều dọc
            //     actionsPaddingRightLeft={10} // Khoảng cách giữa các nút action theo chiều ngang
            //     style={styles.floatingAction}
            //   />
            // ),
          }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault(); // Ngăn chặn hành động chuyển tab mặc định
            },
          })}
        /> */}
        <Tab.Screen
          name="TabThucDon"
          component={AllStackNavigator}
          options={{
            tabBarLabel: 'Thực đơn',
            tabBarLabelStyle: {color: 'green'},
          }}
          initialParams={{
            initialRouteName: 'ThucDon',
          }}
        />
        <Tab.Screen
          name="TabLoiNhan"
          component={AllStackNavigator}
          options={{
            tabBarLabel: 'Nhận xét',
            tabBarLabelStyle: {color: 'green'},
          }}
          initialParams={{
            initialRouteName: 'NhanXet',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingAction: {
    position: 'absolute',
    zIndex: 999,
    top: 100,
  },
});
export default MainNavigator;
