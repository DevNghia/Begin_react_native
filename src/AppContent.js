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
      label: 'Tin Tức',
      onPress: () => navigation.navigate('TinTuc'),
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
const SlideDraw = () => {
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
  // const {data, isLoading} = useQuery(
  //   'useGetProfile',
  //   () => FetchApi.profile(),
  //   console.log('nghĩabeossssssss', data),
  // );
  const profile = async (api, headers) => {
    try {
      // Tạo các options cho fetch
      const options = {
        method: 'GET',
        headers: {
          ...headers.reduce((acc, header) => {
            acc[header.key] = header.value;
            return acc;
          }, {}),
        },
      };

      const response = await fetch(api, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  // Ví dụ sử dụng hàm profile để lấy thông tin người dùng
  const apiUrl = 'http://api.nvoting.com/ps_user/profile'; // Địa chỉ URL API lấy thông tin người dùng
  const headers = [
    {
      key: 'deviceid',
      value: '2D92C8D4-942D-455D-85A2-4B22AB84BE3F',
      type: 'text',
    },
    {
      key: 'Authorization',
      value: 'Bearer ' + account.api_token,
      type: 'text',
    },
  ];

  // profile(apiUrl, headers)
  //   .then(data => {
  //     // Xử lý dữ liệu nhận được từ API
  //     // Ví dụ: log ra console
  //     console.log('Data:', data);
  //   })
  //   .catch(error => {
  //     // Xử lý lỗi nếu có
  //     console.error(error);
  //   });
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
