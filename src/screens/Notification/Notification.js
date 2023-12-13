import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FetchApi} from '../../utils/modules';
import {Loading} from '../../elements';
import {useQuery} from 'react-query';
const Notification = ({navigation}) => {
  // const {data, isLoading} = useQuery(['NewNotification'], () =>
  //   FetchApi.getListNotification(),
  // );
  const [data, setData] = useState([]); // Dữ liệu ban đầu
  // Trạng thái loading
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const reachedEndRef = useRef(false);

  const fetchData = async () => {
    if (!reachedEndRef.current) {
      setLoading(true);
      try {
        const response = await FetchApi.getListNotification(page);
        const newData = response?._data?.data_info;
        // console.log('test newdata: ', newData);
        setData(prevData => [...prevData, ...newData]); // Thêm dữ liệu vào state tùy thuộc vào trang hiện tại
        console.log('test data: ');
        setPage(page + 1); // Tăng trang lên sau khi đã lấy dữ liệu thành công
        // console.log('test data: ', newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Reset trạng thái loading sau khi dữ liệu đã được tải xong hoặc gặp lỗi
      }
    }
  };

  useEffect(() => {
    fetchData(); // Lấy dữ liệu lần đầu khi component được mount
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  const renderFooter = () => {
    // Hiển thị indicator khi đang fetch dữ liệu
    return loading ? (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  const renderItem = ({item}) => {
    const blockListStyle =
      item.status_read == 0 ? styles.blockList : styles.unreadBlockList;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NotificationDetai', {dataProps: item})
        }>
        <View style={blockListStyle}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../utils/Images/2.png')}
          />
          <View>
            <Text style={{color: 'black'}}>{item.notification_title} </Text>
            <Text style={{color: 'black'}}>{item.date_at} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchData} // Khi cuộn đến cuối danh sách, gọi hàm để fetch dữ liệu tiếp theo
        onEndReachedThreshold={5} // Khoảng cách từ bottom của danh sách tới cuối màn hình
        ListFooterComponent={renderFooter} // Hiển thị indicator khi đang load thêm dữ liệu
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  blockList: {
    height: Sizes.device_width < Sizes.device_height,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginHorizontal: 20,
    // marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#9DD646',
    flexDirection: 'row',
  },
  unreadBlockList: {
    height: Sizes.device_width < Sizes.device_height,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginHorizontal: 20,
    // marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
export default Notification;
