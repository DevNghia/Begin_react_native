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
import Ionicons from 'react-native-vector-icons/Ionicons';
const LoiNhan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <Text style={{color: 'black', fontSize: 20}}>LỜI NHẮN </Text>
        </View>
        <Text style={{color: 'black', fontSize: 17, marginHorizontal: 20}}>
          Lời nhắn của bạn{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TaoLoiNhanMoi')}>
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
              Gửi lời nhắn mới{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 17, marginHorizontal: 20}}>
          Danh sách lời nhắn{' '}
        </Text>
        <View style={styles.blockList}>
          <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
            Nguyễn Chí Nghĩa gửi lời nhắn{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Nội dung: cô giáo xinh quá
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
            Nguyễn Chí Nghĩa gửi lời nhắn
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Nội dung: cô giáo xinh quá
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
            Nguyễn Chí Nghĩa gửi lời nhắn
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
            Nội dung: cô giáo xinh quá
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEEE',
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
    backgroundColor: 'white',
  },
});
export default LoiNhan;
