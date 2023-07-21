import * as React from 'react';
<<<<<<< HEAD
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
=======
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
      
>>>>>>> 9ff7ece15def56839a5c6800c4d1ae04654d7ec3
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
    
    } 
<<<<<<< HEAD
  });
=======
  });
  export default HomeScreen;
  
>>>>>>> 9ff7ece15def56839a5c6800c4d1ae04654d7ec3
