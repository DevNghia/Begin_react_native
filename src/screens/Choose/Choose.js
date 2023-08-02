import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-ui-lib';
import {Loading} from '../../elements';
import {useQuery} from 'react-query';
import {FetchApi} from '../../utils/modules';
import {useNavigation} from '@react-navigation/native';
const ChonCon = ({navigation}) => {
  const {data, isLoading} = useQuery(['NewStudent'], () => FetchApi.home());
  if (isLoading) {
    return <Loading />;
  }

  (data._data || []).map((item, index) => {
    console.log('test data: ', item.student_name);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.image}>
        <Image
          source={require('../../utils/Images/banner_kidsschool.png')}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.text1}>Thông tin của bé</Text>

      {(data._data || []).map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('SlideDraw', {dataprops: item})}>
            <View style={styles.choose}>
              {/* <Image
              style={styles.icon}
              source={require('../../../utils/Icons/payments.png')}
            /> */}
              <Text style={styles.textch}>{item.student_name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 20,
  },
  image: {
    overflow: 'hidden', // Giữ cho hình ảnh không bị tràn ra khỏi khung
    margin: 10,
    padding: 10,
  },
  avatar: {
    width: 200,
    height: 100,
  },
  choose: {
    justifyContent: 'center',
    backgroundColor: '#48E958',
    height: 50,
    marginHorizontal: 50,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  textch: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});
export default ChonCon;
