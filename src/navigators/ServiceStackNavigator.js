import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesScreen from "../screens/TopPage/items/Service";


const Stack = createStackNavigator();

const ServiceStackNavigator = ({ navigation, route }) => {
  const { initialRouteName } = route.params;
  return (
    <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      
      <Stack.Screen name="Service" component={ServicesScreen} />
      {/* <Stack.Screen name="NewAndBlogDetail" component={NewAndBlogDetail} /> */}
    
    </Stack.Navigator>
  );
};
export default ServiceStackNavigator;
