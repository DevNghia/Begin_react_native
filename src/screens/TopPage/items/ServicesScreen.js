
import * as React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const  ServicesScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{color:'black'}}>Service</Text>
      </View>
    );
  }
  export default ServicesScreen;

  const styles = StyleSheet.create({
    
    appButtonContainer: {
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: '80%',
      marginVertical: 10,
    },
    appButtonText: {
      fontSize: 18,
      color: "#5F00D6",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
  });