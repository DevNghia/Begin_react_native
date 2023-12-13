import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';

const HocPhi = () => {
  const [data, setData] = useState([]); // Dữ liệu hiển thị
  const [page, setPage] = useState(1); // Trang hiện tại
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const fetchData = async () => {
    // Giả lập thời gian chờ để lấy dữ liệu (1 giây)
    setLoading(true);
    setTimeout(async () => {
      try {
        // Giả lập dữ liệu trả về từ API
        const newData = [];
        for (let i = 0; i < 10; i++) {
          // Tạo dữ liệu mẫu
          const item = {
            id: page * 10 + i, // Tạo id duy nhất cho mỗi item
            name: `Item ${page * 10 + i + 1}`, // Tên của item
            // Các trường thông tin khác của item có thể được thêm vào ở đây
          };
          newData.push(item);
        }
        console.log('newData: ', newData);
        // Simulate fetching success
        setData(prevData => [...prevData, ...newData]); // Thêm dữ liệu mới vào danh sách đã có
        setPage(page + 1); // Tăng trang lên sau khi đã lấy dữ liệu thành công
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false); // Kết thúc quá trình fetching dữ liệu
      }
    }, 1000); // Thời gian giả lập để lấy dữ liệu (1 giây)
  };

  useEffect(() => {
    fetchData(); // Lấy dữ liệu lần đầu khi component được mount
  }, []);

  const renderFooter = () => {
    // Hiển thị indicator khi đang fetch dữ liệu
    return loading ? (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  const renderItem = ({item}) => {
    // Render từng item trong danh sách
    return (
      <View style={{padding: 20}}>
        <Text style={{color: 'black'}}>{item.name}</Text>
        {/* Hiển thị thông tin khác của item */}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={fetchData} // Khi cuộn đến cuối danh sách, gọi hàm để fetch dữ liệu tiếp theo
      onEndReachedThreshold={0.5} // Khoảng cách từ bottom của danh sách tới cuối màn hình
      ListFooterComponent={renderFooter} // Hiển thị indicator khi đang load thêm dữ liệu
    />
  );
};

export default HocPhi;
