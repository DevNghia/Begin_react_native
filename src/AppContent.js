import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main/main';
import Login from './screens/Login/login';
import ChonCon from './screens/Choose/Choose';
import ForgotPassword from './screens/ForgotPassword/fogotpassword';
import Register from './screens/Register/register';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './utils/modules';
import * as NavigationService from './utils/modules';
import MainNavigator from './navigators/MainNavigator';
import {Sizes} from './utils/resource';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableCo} from './elements';
import {useNavigation} from '@react-navigation/core';

import {useQuery} from 'react-query';
// import {MenuFunction} from './navigators/Items';
import {AccountService} from './utils/Account';
import {FetchApi} from './utils/modules';
import {ResetFunction} from './utils/modules';
import {useDispatch} from 'react-redux';
import {setData} from './actions/dataActions';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const MenuFunctionItem = ({data}) => {
  return (
    <TouchableCo onPress={data.onPress}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: Sizes.padding * 1.2,
          marginHorizontal: Sizes.padding,
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: Sizes.h4, color: 'black'}}>{data.label}</Text>
        <Ionicons color={'black'} name={'arrow-forward'} size={20} />
      </View>
    </TouchableCo>
  );
};
const MenuFunction = () => {
  const navigation = useNavigation();
  const menuList = [
    {
      label: 'Chọn bé',
      onPress: () => ResetFunction.resetToChoose(),
    },
    {
      label: 'Đăng xuất',
      onPress: () => {
        try {
          FetchApi.logout();
          ResetFunction.resetToLogin();
          // AccountService.set({});
          // const tag = 'fcmToken';

          // const mmkvId = `mmkv-${tag}`;
          // const mmkvKey = `key-${tag}`;

          // const MMKVwithID = new MMKVStorage.Loader()
          //   .withInstanceID(mmkvId)
          //   .initialize();

          // MMKVwithID.setMap(mmkvKey, {});
        } catch (error) {}
      },
    },
  ];

  return (
    <View>
      {menuList.map(item => {
        return <MenuFunctionItem data={item} key={item.label} />;
      })}
    </View>
  );
};
const menu2 = ({navigation}) => {
  return <MenuFunction />;
};
const SlideDraw = ({route}) => {
  const data = route.params?.dataprops;
  const dispatch = useDispatch();
  dispatch(setData(data));
  return (
    <Drawer.Navigator
      drawerType={'back'}
      drawerContent={menu2}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Mains" component={MainStack} />
    </Drawer.Navigator>
  );
};
const HeaderApp = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const account = AccountService.get();

  return (
    <View
      style={{
        height: Sizes.device_width < Sizes.device_height ? 50 : 70,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        marginTop: insets.top,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableCo
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Ionicons name={'menu'} size={33} color={'black'} />
      </TouchableCo>
      <TouchableCo onPress={() => navigation.navigate('Home')}>
        <Image
          style={{width: 100, height: 45, borderColor: 'black'}}
          source={require('./utils/Images/banner_kidsschool.png')}
        />
      </TouchableCo>
      <TouchableCo onPress={() => navigation.navigate('Notification')}>
        <Ionicons name={'notifications'} size={30} color={'black'} />
      </TouchableCo>
    </View>
  );
};
const MainStack = ({navigation, route}) => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    if (NavigationService.getCurrentRoute() === 'Gift') {
      setIsShow(false);
    } else {
      if (!isShow) {
        setIsShow(true);
      }
    }
  }, [route]);

  return (
    <View style={{flex: 1}}>
      {<HeaderApp navigation={navigation} />}

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
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
        {/* <Stack.Screen name="SlideDraw" component={SlideDraw} /> */}
        {/* <Stack.Screen name="Main" component={Main} /> */}
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="ChonCon" component={ChonCon} />

        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SlideDraw" component={SlideDraw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContent;
