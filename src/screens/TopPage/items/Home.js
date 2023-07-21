import * as React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import MyFlatList from '../../../elements/Flatlist';



const  HomeScreen = ({navigation}) => {
    return (
      
      <View  style={styles.container}>
        <TouchableOpacity 
         onPress={() => navigation.navigate('HocPhi')}>
        <MyFlatList/>
        </TouchableOpacity>
        {/* <Text>AAAAAAAAAAA</Text> */}
        
      </View>
    );
  }
  const styles = StyleSheet.create({

    container:{
      
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
    
    } 
  });
  export default HomeScreen;
  