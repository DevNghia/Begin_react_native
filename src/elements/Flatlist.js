import React from 'react';
import { View, FlatList, Image, StyleSheet,Text,Dimensions } from 'react-native';

import { TouchableOpacity } from 'react-native-ui-lib';


const data = [
  { id: '1',name: 'Tài chính',imageUrl: require('../../assets/images/hand.png'),BGColor: '#5ad39b',Comp:'Hocphi',},
  { id: '2',name: 'Dịch vụ',imageUrl: require('../../assets/images/customer-service.png'),BGColor: '#efae24a1',Comp:'Service', },
  { id: '3',name: 'Hoạt động',imageUrl: require('../../assets/images/extracurricular.png'),BGColor: '#4dcfefb5',Comp:'Hoatdong', },
  { id: '4',name: 'Thực đơn',imageUrl: require('../../assets/images/thucdon.png') ,BGColor: '#ef2424a8',Comp:'Thucdon',},

];

const MyFlatList = () => {
    const columns = 2;

    const itemWidth = Dimensions.get('window').width / 2.2;
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.Comp)}>
     <View style={[styles.itemContainer,{ width: itemWidth,backgroundColor:item.BGColor }]} >
      <Image source={item.imageUrl} style={styles.image} />
      <Text>{item.name}</Text>
     </View>
   </TouchableOpacity>

   
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
<<<<<<< HEAD
       
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        padding: 5,
        backgroundColor:'white'
      },
      image: {
        width: 100, // Adjust the width of the image as needed
=======
        width:'45%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        padding: 10,
        backgroundColor:'pink'
      },
      image: {
        width: '100%', // Adjust the width of the image as needed
>>>>>>> 9ff7ece15def56839a5c6800c4d1ae04654d7ec3
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
