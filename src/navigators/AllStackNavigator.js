import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewAndBlogDetail from "../screens/NewAndBlogDetail/NewAndBlogDetail";
import Blog from "../screens/TopPage/items/Blog";


const Stack = createStackNavigator();

const AllStackNavigator = ({ navigation, route }) => {
  const { initialRouteName } = route.params;
  return (
    <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="NewAndBlogDetail" component={NewAndBlogDetail} />
    
    </Stack.Navigator>
  );
};
export default AllStackNavigator;
