import * as React from 'react';
import { View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native';
import MyFlatList from '../../../elements/Flatlist';
import { Sizes } from '../../../utils/resource';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const  HomeScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
    return (
      
      <View  style={styles.container}>
        <TouchableOpacity >
          <View style={{
             height: Sizes.device_width < Sizes.device_height ,
             paddingHorizontal: 15,
             paddingVertical: 20,
             
             backgroundColor: '#FCEEEE',
             marginTop: insets.top,
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "space-between",
             
          }}>
          <View>
          <Image
        style={styles.icon}
        source={require('../../../utils/Icons/payments.png')}
        />
        <Text style={styles.textIcon}>Học phí</Text>
        </View>
        <View>
          <Image
        style={styles.icon}
        source={require('../../../utils/Icons/edit_note.png')}
        />
        <Text style={styles.textIcon}>Xin Nghỉ</Text>
        </View>
        <View>
        <Image
        style={styles.icon}
        source={require('../../../utils/Icons/newspaper.png')}
        />
        <Text style={styles.textIcon}>Tin Tức</Text>
        </View>
          </View>
          <View style={{
             height: Sizes.device_width < Sizes.device_height ,
             paddingHorizontal: 15,
             paddingVertical: 20,
             
             backgroundColor: '#FCEEEE',
             marginTop: insets.top,
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "space-between",
             
          }}>
          <View>
          <Image
        style={styles.icon}
        source={require('../../../utils/Icons/photo_library.png')}
        />
        <Text style={styles.textIcon}>Albums</Text>
        </View>
        <View>
          <Image
        style={styles.icon}
        source={require('../../../utils/Icons/medical_services.png')}
        />
        <Text style={styles.textIcon}>Dịch Vụ</Text>
        </View>
        <View>
        <Image
        style={styles.icon}
        source={require('../../../utils/Icons/bookmark_add.png')}
        />
        <Text style={styles.textIcon}>Đánh Giá</Text>
        </View>
          </View>
          <View 
          style={{ height: Sizes.device_width < Sizes.device_height ,
            width: 300,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius:15,
            backgroundColor: '#686CDE',
            marginVertical: 20,
            marginHorizontal: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,}}
          >
          <Image
        style={{width: 38, height:30, borderColor:'black',}}
        source={require('../../../utils/Icons/child_care.png')}
        />
        <Text style={{color:'white'}}>Thứ hai,24/07/2023</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>AAAAAAAAAAA</Text> */}
        
      </View>
    );
  }
  const styles = StyleSheet.create({

    container:{
      flexWrap:'wrap',
      justifyContent:'space-between',
      backgroundColor:'#FCEEEE'
    } ,
    icon:{
      width: 45, height:49, borderColor:'black',
      
      marginHorizontal: 30
      
    },
    textIcon:{
      color: 'black',
      marginHorizontal:30
    }
  });
  export default HomeScreen;
  