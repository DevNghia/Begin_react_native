import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import {FetchApi} from '../../utils/modules';
import {useSelector} from 'react-redux';
import {Loading} from '../../elements';

const XinNghi = ({navigation}) => {
  const studentId = useSelector(state => state.data.data._id);
  const {data, isLoading} = useQuery(['NewListOffSchool'], () =>
    FetchApi.getOffSchool(studentId),
  );
  const {data: cd, isLoading: loadcd} = useQuery(['NewListOffSchoolcd'], () =>
    FetchApi.getOffSchoolcd(studentId),
  );
  if (isLoading && loadcd) {
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
          <Text style={{color: 'black', fontSize: 20}}>XIN NGHỈ</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
        </View>
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
                {/* Nguyễn Chí Nghĩa gửi đơn xin nghỉ cho bé Giang 1 ngày{' '} */}
                {item.relative_fullname} gửi đơn xin nghỉ cho bé{' '}
                {item.student_name}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Từ ngày: {item.from_date}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Đến ngày: {item.to_date}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Lý do: {item.description}
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
                {/* Nguyễn Chí Nghĩa gửi đơn xin nghỉ cho bé Giang 1 ngày{' '} */}
                {item.relative_fullname} gửi đơn xin nghỉ cho bé{' '}
                {item.student_name}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Từ ngày: {item.from_date}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Đến ngày: {item.to_date}
              </Text>
              <Text style={{color: 'black', fontSize: 14, marginVertical: 5}}>
                Lý do: {item.description}
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
