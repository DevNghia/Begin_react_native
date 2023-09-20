import React, {useState} from 'react';
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
const NhanXet = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
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
          <Text style={{color: 'black', fontSize: 20}}>Nhận xét</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
        </View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Đánh giá định kỳ - Bé Giang
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Ngày dánh giá : 11/09/2023
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 'auto',
            }}>
            <Image
              source={require('../../utils/Images/sschool.jpg')}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={{color: 'black'}}>
                BÁO CÁO SỰ TIẾN BỘ CỦA TRẺ CHƯƠNG TRÌNH ESL-KHỐI NEMO HỆ CHUẨN
                CAO/KIDSSCHOOL PROGRESS REPORT-ESL NEMO HIGH STANDARD(NORTH)
              </Text>

              <Text style={{color: 'black', fontSize: 12}}>
                Học kỳ: Học kỳ II - Năm học 2022 -2023
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                Phạm vi: Kidsschool
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text style={{color: 'black', fontSize: 12}}>
              Từ ngày 03/01 - Đến ngày 31/05
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Đánh giá định kỳ - Bé Giang
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Ngày dánh giá : 11/09/2023
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 'auto',
            }}>
            <Image
              source={require('../../utils/Images/sschool.jpg')}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={{color: 'black'}}>
                BÁO CÁO SỰ TIẾN BỘ CỦA TRẺ CHƯƠNG TRÌNH ESL-KHỐI NEMO HỆ CHUẨN
                CAO/KIDSSCHOOL PROGRESS REPORT-ESL NEMO HIGH STANDARD(NORTH)
              </Text>

              <Text style={{color: 'black', fontSize: 12}}>
                Học kỳ: Học kỳ II - Năm học 2022 -2023
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                Phạm vi: Kidsschool
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text style={{color: 'black', fontSize: 12}}>
              Từ ngày 03/01 - Đến ngày 31/05
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Đánh giá định kỳ - Bé Giang
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Ngày dánh giá : 11/09/2023
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 'auto',
            }}>
            <Image
              source={require('../../utils/Images/sschool.jpg')}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={{color: 'black'}}>
                BÁO CÁO SỰ TIẾN BỘ CỦA TRẺ CHƯƠNG TRÌNH ESL-KHỐI NEMO HỆ CHUẨN
                CAO/KIDSSCHOOL PROGRESS REPORT-ESL NEMO HIGH STANDARD(NORTH)
              </Text>

              <Text style={{color: 'black', fontSize: 12}}>
                Học kỳ: Học kỳ II - Năm học 2022 -2023
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                Phạm vi: Kidsschool
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text style={{color: 'black', fontSize: 12}}>
              Từ ngày 03/01 - Đến ngày 31/05
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  image: {
    flex: 1,
    width: '35%',
    height: '50%',
  },
  content: {
    flex: 2,
  },
});
export default NhanXet;
