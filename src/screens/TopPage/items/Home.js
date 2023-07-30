import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MyFlatList from '../../../elements/Flatlist';
import {Sizes} from '../../../utils/resource';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: Sizes.device_width < Sizes.device_height,
          paddingHorizontal: 15,
          paddingVertical: 20,

          backgroundColor: '#FCEEEE',
          marginTop: insets.top,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HocPhi')}>
          <View>
            {/* <Image
            style={styles.icon}
            source={require('../../../utils/Icons/payments.png')}
          /> */}
            <Icon
              name="payments"
              size={45}
              color="#04962D"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Học phí</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('XinNghi')}>
          <View>
            <Icon name="email" size={45} color="#FEBE10" style={styles.icon} />
            <Text style={styles.textIcon}>Xin Nghỉ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TinTuc')}>
          <View>
            <Icon
              name="article"
              size={45}
              color="#08DCEA"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Tin Tức</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: Sizes.device_width < Sizes.device_height,
          paddingHorizontal: 15,
          paddingVertical: 20,

          backgroundColor: '#FCEEEE',
          marginTop: insets.top,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Albums')}>
          <View>
            <Icon
              name="photo-album"
              size={45}
              color="#EF0606"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Albums</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DichVu')}>
          <View>
            <Icon
              name="home-repair-service"
              size={45}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Dịch Vụ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DanhGia')}>
          <View>
            <Icon
              name="assessment"
              size={45}
              color="#8F14C9"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Đánh Giá</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: Sizes.device_width < Sizes.device_height,
          width: '90%',
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: 15,
          backgroundColor: '#686CDE',
          marginVertical: 20,
          // marginHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 38,
            height: 30,
            borderColor: 'black',
            tintColor: 'white',
          }}
          source={require('../../../utils/Icons/child_care.png')}
        />
        <Text style={{color: 'white'}}>Thứ hai,24/07/2023</Text>
      </View>
      <View
        style={{
          height: Sizes.device_width < Sizes.device_height,
          width: '90%',

          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: 15,
          backgroundColor: '#D9D9D9',

          marginVertical: -10,
          marginHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>Hoạt động của bé</Text>
        <View
          style={{
            //  height: Sizes.device_width < Sizes.device_height ,
            height: 210,
            width: 280,

            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: 15,
            backgroundColor: 'white',
            marginVertical: 0,
            marginHorizontal: 30,
            // flexDirection: "row",
            // alignItems: "center",
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
          <Text style={{color: 'black'}}>Thời gian</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FCEEEE',
  },
  icon: {
    width: 45,
    height: 49,
    borderColor: 'black',

    marginHorizontal: 30,
  },
  textIcon: {
    color: 'black',
    marginHorizontal: 30,
  },
});
export default HomeScreen;
