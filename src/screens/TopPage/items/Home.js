
import * as React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import MyFlatList from '../../../elements/Flatlist';
import { TouchableOpacity } from 'react-native-gesture-handler';
const  HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* <Text>AAAAAAAAAAA</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('Service')}>
          <MyFlatList/>
        </TouchableOpacity>
        {/* <MyFlatList/> */}
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