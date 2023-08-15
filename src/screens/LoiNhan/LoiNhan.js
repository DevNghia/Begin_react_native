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
import {useSelector} from 'react-redux';
import {FetchApi} from '../../utils/modules';
import {useQuery} from 'react-query';
import {Loading} from '../../elements';
const LoiNhan = ({navigation}) => {
  const studentId = useSelector(state => state.data.data._id);
  const {data, isLoading} = useQuery(['NewListAdvice'], () =>
    FetchApi.getAdvice(studentId),
  );
  const {data: cd, isLoadingcd} = useQuery(['NewListAdvicecd'], () =>
    FetchApi.getAdvicecd(studentId),
  );
  if (isLoading && isLoadingcd) {
    return <Loading />;
  }

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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name={'arrow-back-outline'} size={30} color={'black'} />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>LỜI NHẮN</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
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
        {(data || []).map((item, index) => {
          return (
            <View style={styles.blockList} key={index}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name={`checkmark-circle-sharp`}
                  size={20}
                  color={'green'}
                />
                <Text style={{color: 'black', fontSize: 16}}>Đã duyệt</Text>
              </View>
              <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
                Lời nhắn đến {item.user_fullname}
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
                Gửi lúc {item.date_at}
              </Text>
            </View>
          );
        })}
        {(cd || []).map((item, index) => {
          return (
            <View style={styles.blockList} key={index}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name={`checkmark-circle-sharp`}
                  size={20}
                  color={'gray'}
                />
                <Text style={{color: 'black', fontSize: 16}}>Chưa duyệt</Text>
              </View>
              <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
                Lời nhắn đến {item.user_fullname}
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
                Gửi lúc {item.date_at}
              </Text>
            </View>
          );
        })}
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
