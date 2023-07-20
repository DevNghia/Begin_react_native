
import * as React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import MyFlatList from '../../../elements/Flatlist';
const  HomeScreen = () => {
    return (
      <View style={styles.container}>
        {/* <Text>AAAAAAAAAAA</Text> */}
        <MyFlatList/>
      </View>
    );
  }
  export default HomeScreen;
  const styles = StyleSheet.create({

    container:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
    
    } 
  });