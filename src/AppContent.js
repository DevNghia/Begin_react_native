import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main/main';
import Login from './screens/Login/login';
import ForgotPassword from './screens/ForgotPassword/fogotpassword';
import Register from './screens/Register/register';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './utils/modules';
import * as NavigationService from './utils/modules';
import MainNavigator from './navigators/MainNavigator';
import {Sizes} from './utils/resource';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FetchApi} from './utils/modules';
import {useQuery} from 'react-query';
import {AccountService} from './utils/Account';
import {getUniqueId} from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const SlideDraw = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Mains" component={MainStack} />
      {/* <Drawer.Screen name="Notifications" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};
const HeaderApp = () => {
  const insets = useSafeAreaInsets();
  //   const {data, isLoading} = useQuery('useGetProfile', () =>
  //   FetchApi.profile(),
  //   console.log("nghĩabeossssssss", data),

  // );
  // const profile = async (api, headers) => {
  //   try {
  //     // Tạo các options cho fetch
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         ...headers.reduce((acc, header) => {
  //           acc[header.key] = header.value;
  //           return acc;
  //         }, {}),
  //       },
  //     };

  //     const response = await fetch(api, options);
  //     const responseData = await response.json();
  //     return responseData;
  //   } catch (error) {
  //     console.error('Error:', error);
  //     throw error;
  //   }
  // };

  // // Ví dụ sử dụng hàm profile để lấy thông tin người dùng
  // const apiUrl = 'http://api.nvoting.com/ps_user/profile'; // Địa chỉ URL API lấy thông tin người dùng
  // const headers = [
  //   { key: 'deviceid', value: 'ffffffff-d336-0bb2-ffff-ffffe5332189', type: 'text' },
  //   { key: 'Authorization', value: 'Bearer 1df87052482606b2b09f0bb4335180b9899a3c5c3a59e1633c9d0e73097908f1', type: 'text' },
  // ];

  // profile(apiUrl, headers)
  //   .then((data) => {
  //     // Xử lý dữ liệu nhận được từ API
  //     // Ví dụ: log ra console
  //     console.log('Data:', data);
  //   })
  //   .catch((error) => {
  //     // Xử lý lỗi nếu có
  //     console.error(error);
  //   });
  // const ids = DeviceInfo.getUniqueId();
  // const account = AccountService.get();
  // console.log('idddddđđ', ids)
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
        // borderWidth: 1,
      }}>
      {/* <Ionicons  name={'person-circle'} size={30} color={'pink'}/> */}
      <Image
        style={{width: 25, height: 17, borderColor: 'black'}}
        source={require('./utils/Icons/menu.png')}
      />
      <Image
        style={{width: 100, height: 45, borderColor: 'black'}}
        source={require('./utils/Images/banner_kidsschool.png')}
      />
      <Image
        style={{width: 17, height: 21, borderColor: 'black'}}
        source={require('./utils/Icons/notifications.png')}
      />
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
        <Stack.Screen name="SlideDraw" component={SlideDraw} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* <Stack.Screen name="SlideDraw" component={SlideDraw} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContent;
