import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
  const [data, setData] = useState(null); // Dữ liệu ban đầu
  const [isLoading, setIsLoading] = useState(true); // Trạng thái loading

  const fetchData = async () => {
    try {
      const response = await FetchApi.getListNotification();
      const newData = response; // Giả sử dữ liệu từ API có thuộc tính _data
      setData(newData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Gọi fetchData khi component được tạo

    const interval = setInterval(() => {
      fetchData(); // Gọi fetchData mỗi 5 giây
    }, 5000);

    // Clear interval khi component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const Data_Null = () => {
    return (
      <Text
        style={{
          color: 'gray',
          justifyContent: 'center',
          marginVertical: 200,
        }}>
        Bạn không có thông báo.
      </Text>
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

      <ScrollView>
        {(data?._data?.data_info || []).map((item, index) => {
          const blockListStyle =
            item.status_read == 0 ? styles.blockList : styles.unreadBlockList;
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('NotificationDetai', {dataProps: item})
              }>
              <View style={blockListStyle}>
                <Image
                  style={{width: 80, height: 35}}
                  source={require('../Main/banner_kidsschool.png')}
                />
                <View>
                  <Text style={{color: 'black'}}>
                    {item.notification_title}{' '}
                  </Text>
                  <Text style={{color: 'black'}}>{item.date_at} </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    backgroundColor: '#FFE8E8',
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
