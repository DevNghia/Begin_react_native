
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView,Dimensions} from 'react-native';
import { Sizes } from '../../utils/resource';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native-ui-lib';
const  SucKhoe = () => {
  const columns = 2;
  const itemWidth = Dimensions.get('window').width /2.35;
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{
        height: Sizes.device_width < Sizes.device_height,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        // marginTop: insets.top,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       }}>
        <Text style={{color:'black',fontSize:20}}>SỨC KHỎE </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:15,
        margin:10,

       }}>
        <View style={styles.image}>
        <Image source={require('../../utils/Icons/payments.png')}
        style={styles.avatar}/>
        </View>
      
      <Text style={{color:'black',fontSize:14,marginHorizontal:20,}}>Đang xem thông tin của bé Giang </Text>
      </View>


      <Text style={{color:'black',fontSize:17,marginHorizontal:20,}}>Chiều cao - Cân nặng </Text>
      <View style={{flexDirection: 'row',}}>
        <View style={[styles.itemContainer,{ width: itemWidth }]} >
        <Icon name="human-male-height" size={45} color="#22A249"  style={styles.icon} />
        <Text>Chiều cao</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>90 cm</Text>
        </View>

        <View style={[styles.itemContainer,{ width: itemWidth }]} >
        <Icon name="weight-kilogram" size={45} color="#22A249"  style={styles.icon} />
        <Text>Cân nặng</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>12.4 KG</Text>
        </View>
      </View>

      <Text style={{color:'black',fontSize:17,marginHorizontal:20,}}>Sức khỏe chung </Text>
      <View
          style={styles.viewbot}>
          <Text style={styles.textbot}>Nhóm máu: A</Text>
          <Text style={styles.textbot}>Răng-Hàm-Mặt: value</Text>
          <Text style={styles.textbot}>Tai-Mũi-Họng: value</Text>
          <Text style={styles.textbot}>Khám mắt: value</Text>
          <Text style={styles.textbot}>Khám tim: value</Text>
          <Text style={styles.textbot}>Khám phổi: value</Text>
          <Text style={styles.textbot}>Khám da: value</Text>
          <Text style={styles.textbot}>Người khám: value</Text>
          <Text style={styles.textbot}>Ghi chú: value</Text>
        </View>
     

        </ScrollView>
        
      </View>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FCEEEE',
      justifyContent: 'flex-start',     
    },
    itemContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginHorizontal: 15,
      borderRadius: 8,
      padding: 10,
      backgroundColor:'#FFFFFF'
    },
    blockList:{
      height: Sizes.device_width < Sizes.device_height,
        width: 320,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    image: {
      width: 50, // Kích thước của avatar
      height: 50,
      borderRadius: 50, // Đặt borderRadius thành nửa kích thước để làm hình ảnh tròn
      overflow: 'hidden', // Giữ cho hình ảnh không bị tràn ra khỏi khung
    },
    avatar: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
    viewbot: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      borderRadius: 15,
      backgroundColor: 'white',
      marginVertical: 0,
      marginHorizontal: 15,
      // flexDirection: "row",
      // alignItems: "center",
      justifyContent: 'space-between',
    },
    textbot:{
      color:'black',
      fontSize:15,
      paddingVertical: 10,

    },
  });
  export default SucKhoe;