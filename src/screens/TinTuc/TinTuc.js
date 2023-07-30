import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Sizes} from '../../utils/resource';

const TinTuc = ({navigation}) => {
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
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Tin Tức </Text>
        </View>
        <View style={styles.blockList}>
          <Image
            style={{width: 130, height: 70}}
            source={require('../Main/banner_kidsschool.png')}
          />
          <Text style={{color: 'black'}}>Bản tin tháng 7</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: '#FFE8E8',
    flexDirection: 'row',
  },
});
export default TinTuc;
