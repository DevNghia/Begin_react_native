import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewAndBlogDetail from "../screens/NewAndBlogDetail/NewAndBlogDetail";
import Blog from "../screens/TopPage/items/Blog";
import ServiceScreen from "../screens/TopPage/items/ServicesScreen"


const Stack = createStackNavigator();

const AllStackNavigator = ({ navigation, route }) => {
  const { initialRouteName } = route.params;
  return (
    <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Service" component={ServicesScreen} />
      {/* <Stack.Screen name/> */}
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="NewAndBlogDetail" component={NewAndBlogDetail} />
    
    </Stack.Navigator>
  );
};
export default AllStackNavigator;
