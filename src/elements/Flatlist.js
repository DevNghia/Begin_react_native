import React from 'react';
import { View, FlatList, Image, StyleSheet,Text,Dimensions } from 'react-native';
import Blog from '../screens/TopPage/items/Blog';

const data = [
  { id: '1',name: 'Tài chính',imageUrl: './money-bag.png'},
  { id: '2',name: 'Lịch học',imageUrl: 'https://example.com/image2.jpg' },
  { id: '3',name: 'Hoạt động',imageUrl: 'https://example.com/image3.jpg' },
  { id: '4',name: 'Dịch vụ',imageUrl: 'https://example.com/image3.jpg' },
  // Add more data objects as needed
];

const MyFlatList = () => {
    const columns = 2;
    const itemWidth = Dimensions.get('window').width / 2.2;
  
  const renderItem = ({ item }) => (
   
     <View style={[styles.itemContainer,{ width: itemWidth }]} >
      <Image source={require('./money-bag.png')} style={styles.image} />
      <Text>{item.name}</Text>
     </View>
   
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={columns}
    />
  );
};

const styles = StyleSheet.create({
    itemContainer: {
       
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        padding: 5,
        backgroundColor:'white'
      },
      image: {
        width: '100%', // Adjust the width of the image as needed
        height: 100, // Adjust the height of the image as needed
        borderRadius: 8,
      },
  name: {
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginTop:8,
  }
});

export default MyFlatList;
