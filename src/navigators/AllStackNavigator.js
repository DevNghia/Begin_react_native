import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewAndBlogDetail from "../screens/NewAndBlogDetail/NewAndBlogDetail";
import Blog from "../screens/TopPage/items/Blog";
import HocPhi from "../screens/HocPhi/HocPhi";
import HomeScreen from "../screens/TopPage/items/Home";
import XinNghi from "../screens/XinNghi/XinNghi";
import DichVu from "../screens/DichVu/DichVu";
import DanhGia from "../screens/DanhGia/DanhGia";
import Albums from "../screens/Albums/Albums";
import TinTuc from "../screens/TinTuc/TinTuc";


const Stack = createStackNavigator();

const AllStackNavigator = ({ navigation, route }) => {
  const { initialRouteName } = route.params;
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="XinNghi" component={XinNghi} />
       <Stack.Screen name="TinTuc" component={TinTuc} />
       <Stack.Screen name="Albums" component={Albums} />
       <Stack.Screen name="DichVu" component={DichVu} />
       <Stack.Screen name="DanhGia" component={DanhGia} />
       <Stack.Screen name="HocPhi" component={HocPhi} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="NewAndBlogDetail" component={NewAndBlogDetail} />
    
    </Stack.Navigator>
  );
};
export default AllStackNavigator;
