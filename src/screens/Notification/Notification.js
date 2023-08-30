import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: Sizes.device_width < Sizes.device_height,
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: 'white',
          // marginTop: insets.top,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name={'arrow-back-outline'} size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 20}}>THÔNG BÁO</Text>
        <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
      </View>
      {/* <View style={styles.blockList}>
          <Image
            style={{width: 80, height: 35}}
            source={require('../Main/banner_kidsschool.png')}
          />
          <Text style={{color: 'black'}}>Có tin mới: Thông báo về lịch</Text>
        </View> */}

      <ScrollView>
        <Text
          style={{
            color: 'gray',
            justifyContent: 'center',
            marginVertical: 200,
          }}>
          Bạn không có thông báo.
        </Text>
        {/* <View style={styles.blockList}>
          <Image
            style={{width: 80, height: 35}}
            source={require('../Main/banner_kidsschool.png')}
          />
          <Text style={{color: 'black'}}>Có tin mới: Thông báo về lịch</Text>
        </View> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockList: {
    height: Sizes.device_width < Sizes.device_height,
    width: 320,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFE8E8',
    flexDirection: 'row',
  },
});
export default Notification;
