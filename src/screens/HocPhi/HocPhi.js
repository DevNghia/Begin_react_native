import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import {Image} from 'react-native-ui-lib';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Table,
  TableWrapper,
  Row,
  Col,
  Cell,
} from 'react-native-table-component';
import {useSelector} from 'react-redux';
import {Loading} from '../../elements';
import {FetchApi} from '../../utils/modules';

import {useQuery} from 'react-query';

const HocPhi = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = 'Tháng ' + (tempDate.getMonth() + 1);
    setText(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const options = {month: 'long'};
  const formatDate = dateString => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${month}${year}`;
  };
  const studentId = useSelector(state => state.data.data._id);
  const {data, isLoading} = useQuery(['NewFee', formatDate(date)], () =>
    FetchApi.getFee(studentId, formatDate(date)),
  );
  if (isLoading) {
    return <Loading />;
  }
  const data_info = data._data.data_infos;
  let data1 = 'null';
  let data2 = 'null';
  let data3 = 'null';
  let data4 = 'null';
  if (data_info !== null) {
    data1 = data_info.dukien;
    data2 = data_info.duthangtruoc;
    data3 = data_info.tongnop;
    data4 = data_info.danop;
  } else {
    data1 = '';
    data2 = '';
    data3 = '';
    data4 = '';
  }

  const tableDatas = [
    {name: 'John', age: '28', occupation: 'Developer'},
    {name: 'Jane', age: '24', occupation: 'Designer'},
    {name: 'Mike', age: '32', occupation: 'Manager'},
  ];
  const state = {
    tableHead: ['Tên phí', 'Số lượng', 'Thành Tiền'],
    tableData: [
      ['Ăn sáng', '26', '260000'],
      ['Ăn trưa', '26', '780000'],
      ['Học phí', '1', '3000000'],
      ['ngoại khóa', '1', '200000'],
    ],
  };

  const state2 = {
    tableHead2: [
      'Dự kiến của tháng: ',
      'Số dư: ',
      'Tổng thanh toán: ',
      'Đã thanh toán: ',
    ],
    tableData: [data1 + ' vnđ', data2 + ' vnđ', data3 + ' vnđ', data4 + ' vnđ'],
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: Sizes.device_width < Sizes.device_height,
            paddingHorizontal: 15,
            paddingVertical: 10,

            // marginTop: insets.top,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name={'arrow-back-outline'} size={30} color={'black'} />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>HỌC PHÍ</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'#FCEEEE'} />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 15,
            margin: 10,
          }}>
          <View style={styles.image}>
            <Image
              source={{
                uri: data._data.user_info.avatar_url,
              }}
              style={styles.avatar}
            />
          </View>

          <Text style={{color: 'black', fontSize: 16, marginHorizontal: 20}}>
            {data._data.user_info.first_name +
              ' ' +
              data._data.user_info.last_name}
          </Text>
        </View>

        <View style={styles.date}>
          <Text onPress={() => showMode('date')} style={styles.text1}>
            {date.toLocaleDateString('vi-VN', options)}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Table style={styles.table}>
          <Row
            data={state.tableHead}
            flexArr={[1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          {(data._data.fee || []).map((rowData, index) => (
            <TableWrapper key={index} style={styles.wrapper}>
              <Cell data={rowData.se} textStyle={{...styles.text}} />
              <Cell data={rowData.by_number} textStyle={{...styles.text}} />
              <Cell
                data={rowData.unit_price + ' vnđ'}
                textStyle={{...styles.text}}
              />
            </TableWrapper>
          ))}
        </Table>

        <Table style={styles.table}>
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state2.tableHead2}
              style={styles.title}
              heightArr={[30, 30, 30]}
              textStyle={styles.titleText}></Col>
            <Col
              data={state2.tableData}
              heightArr={[30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEEE',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  date: {
    justifyContent: 'center',
    backgroundColor: '#48E958',
    height: 50,
    marginHorizontal: 50,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50, // Đặt borderRadius thành nửa kích thước để làm hình ảnh tròn
    overflow: 'hidden', // Giữ cho hình ảnh không bị tràn ra khỏi khung
    marginBottom: 10,
  },
  avatar: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  table: {
    flex: 1,
    backgroundColor: '#fff',
    // borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    // borderRadius: 10,
    borderWidth: 0,
  },
  singleHead: {width: 80, height: 40, backgroundColor: '#c8e1ff'},
  wrapper: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'pink',
    paddingBottom: 2,
  },
  title: {flex: 1, backgroundColor: '#f6f8fa', marginHorizontal: 15},
  row: {height: 28},
  text: {textAlign: 'center', color: 'black'},
  titleText: {color: 'black'},
});
export default HocPhi;
