import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Sizes} from '../../../utils/resource';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cell,
} from 'react-native-table-component';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {FetchApi} from '../../../utils/modules';
import {Loading} from '../../../elements';
const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Ho_Chi_Minh',
  };
  console.log(date);
  const formatDate = dateString => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };
  const studentId = useSelector(state => state.data.data._id);
  const {data, isLoading} = useQuery(['NewActive', formatDate(date)], () =>
    FetchApi.getActive(studentId, formatDate(date)),
  );

  if (isLoading) {
    return <Loading />;
  }
  const insets = useSafeAreaInsets();
  (data._data.data_info || []).map((item, index) => [
    console.log('adsasđsd', item.note),
  ]);
  const state = {
    tableHead: ['Thời gian', 'Nội dung'],
    tableData: (data._data.data_info || []).map((item, index) => [
      item.start_time,
      item.note,
    ]),
  };
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
          // paddingHorizontal: 15,
          // paddingVertical: 20,

          backgroundColor: '#FCEEEE',
          marginTop: insets.top,
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Albums')}>
          <View>
            <Icon
              name="photo-album"
              size={45}
              color="#EF0606"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Albums</Text>
          </View>
        </TouchableOpacity> */}
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
        {/* <TouchableOpacity onPress={() => navigation.navigate('DanhGia')}>
          <View>
            <Icon
              name="assessment"
              size={45}
              color="#8F14C9"
              style={styles.icon}
            />
            <Text style={styles.textIcon}>Đánh Giá</Text>
          </View>
        </TouchableOpacity> */}
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
        <Text style={{color: 'white'}}>
          {' '}
          {date.toLocaleDateString('vi-VN', options)}
        </Text>
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
        <Text style={{color: '#686CDE', fontSize: 17, fontWeight: 'bold'}}>
          HOẠT ĐỘNG TRONG NGÀY
        </Text>

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
          <ScrollView>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={state.tableHead}
                flexArr={[2, 3]}
                style={styles.head}
                textStyle={{textAlign: 'center', color: 'black'}}
              />
              <TableWrapper style={styles.wrapper}>
                <Col
                  data={state.tableTitle}
                  style={styles.title}
                  heightArr={[28, 28]}
                  textStyle={{textAlign: 'center', color: 'black'}}
                />
                <Rows
                  data={state.tableData}
                  flexArr={[2, 3]}
                  style={styles.row}
                  textStyle={{textAlign: 'center', color: 'black'}}
                />
              </TableWrapper>
            </Table>
          </ScrollView>
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
  head: {height: 30, backgroundColor: '#f1f8ff'},
  text: {textAlign: 'center', color: 'black'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa'},
  row: {height: 28},
});
export default HomeScreen;
