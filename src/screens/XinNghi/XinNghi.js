import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../utils/modules';
const XinNghi = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            height: Sizes.device_width < Sizes.device_height,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: 'white',
            // marginTop: insets.top,
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>XIN NGHỈ </Text>
        </View>
        <Text style={{color: 'black', fontSize: 17, marginHorizontal: 20}}>
          Thông tin của bé Giang{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TaoDonXinNghi')}>
          <View
            style={{
              height: Sizes.device_width < Sizes.device_height,
              width: 320,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              // marginTop: insets.top,
              flexDirection: 'row',
              // alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <Ionicons name={'add-circle-sharp'} size={30} color={'#7EA2FE'} />
            <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
              Gửi đơn xin nghỉ mới{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 17, marginHorizontal: 20}}>
          Danh sách đơn{' '}
        </Text>
        <View style={styles.blockList}>
          <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
            Nguyễn Chí Nghĩa gửi đơn xin nghỉ cho bé Giang 1 ngày{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Lý do: Bé nghỉ ốm
          </Text>
          <Text
            style={{
              color: '#BFBFBF',
              fontSize: 12,
              marginVertical: 5,
              alignSelf: 'flex-end',
            }}>
            Gửi lúc 10:00 ngày 23/07/2023
          </Text>
        </View>
        <View style={styles.blockList}>
          <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
            Nguyễn Chí Nghĩa gửi đơn xin nghỉ cho bé Giang 1 ngày{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Lý do: Bé nghỉ ốm
          </Text>
          <Text
            style={{
              color: '#BFBFBF',
              fontSize: 12,
              marginVertical: 5,
              alignSelf: 'flex-end',
            }}>
            Gửi lúc 10:00 ngày 23/07/2023
          </Text>
        </View>
        <View style={styles.blockList}>
          <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
            Nguyễn Chí Nghĩa gửi đơn xin nghỉ cho bé Giang 1 ngày{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Lý do: Bé nghỉ ốm
          </Text>
          <Text
            style={{
              color: '#BFBFBF',
              fontSize: 12,
              marginVertical: 5,
              alignSelf: 'flex-end',
            }}>
            Gửi lúc 10:00 ngày 23/07/2023
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEEE',
    justifyContent: 'flex-start',
  },
  blockList: {
    height: Sizes.device_width < Sizes.device_height,
    width: 320,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
export default XinNghi;
