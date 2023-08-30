import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import HTML from 'react-native-render-html';
import {Loading} from '../../elements';
import {useQuery} from 'react-query';
import {FetchApi} from '../../utils/modules';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThucDon = ({navigation}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };
  const studentId = useSelector(state => state?.data?.data?._id);
  const formatDate = dateString => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };
  const {data, isLoading} = useQuery(
    ['NewThucDon', formatDate(date)],
    async () => {
      const ID = await AsyncStorage.getItem('studentId');
      let updatestudenID;
      if (ID) {
        updatestudenID = ID;
      } else {
        updatestudenID = studentId;
      }

      const menu = await FetchApi.getMenusDay(updatestudenID, formatDate(date));
      return menu;
    },
  );

  if (isLoading) {
    return <Loading />;
  }

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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name={'arrow-back-outline'} size={30} color={'black'} />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>Thực Đơn</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
        </View>

        {/* <Controller
          control={control}
          name="birthday"
          defaultValue=""
          placeholder="Full Name"
          rules={{required: true}}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <Pressable onPress={showDatepicker}>
              <TextInput
                style={{color: 'black'}}
                underlineColorAndroid="transparent"
                value={value ? new Date(value).toLocaleDateString() : ''}
                placeholder="Birth Day"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={false}
              />

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={value ? new Date(value) : new Date()}
                  // display="spinner"
                  mode="date"
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate ? selectedDate.toISOString() : '');
                    // onSubmit(value);
                    setDates(selectedDate);
                    setShow(false);
                  }}
                />
              )}
            </Pressable>
          )}
        /> */}
        <TouchableOpacity onPress={showDatepicker}>
          <View
            style={{
              height: Sizes.device_width < Sizes.device_height,
              width: 300,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 30,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: '#FFE8E8',
              // marginTop: insets.top,
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Ionicons name={'calendar-outline'} size={30} color={'#EE4B4B'} />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginVertical: 5,
                marginHorizontal: 18,
              }}>
              {data.day_at}
            </Text>
          </View>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        {(data.meal || []).map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Text style={{color: 'black', marginHorizontal: 20}}>
                {item?.meal_title}
              </Text>
              {/* Lặp qua thuộc tính của "food_op" */}
              {Object.keys(item.food_op || {}).map(foodKey => {
                // console.log('test thực đơn: ', item.food_op[foodKey].title);
                return (
                  <View style={styles.blockList} key={foodKey}>
                    <Image
                      style={{width: '35%', height: 75, borderRadius: 10}}
                      source={{
                        uri:
                          item?.food_op[foodKey]?.image ??
                          'https://media.istockphoto.com/id/1256285832/vi/vec-to/th%E1%BB%B1c-%C4%91%C6%A1n-ch%E1%BB%AF-c%C3%A1i-v%E1%BB%9Bi-n%C4%A9a-%C4%91%C4%A9a-v%C3%A0-%C3%A1p-ph%C3%ADch-v%E1%BA%BD-tay-mu%E1%BB%97ng-cho-th%E1%BB%B1c-%C4%91%C6%A1n-qu%C3%A1n-c%C3%A0-ph%C3%AA-ho%E1%BA%B7c-nh%C3%A0-h%C3%A0ng.jpg?s=1024x1024&w=is&k=20&c=CdZ_2zVAMRBL5Bf51L-tSS1y3yifebUGtM6sRFj326o=',
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 10,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'black',
                          fontSize: Sizes.h5,
                        }}
                        multipleLines={true}
                        numberOfLines={10}>
                        {item.food_op[foodKey].title}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'gray',
                          fontSize: Sizes.h6,
                        }}
                        multipleLines={true}
                        numberOfLines={3}>
                        {item.food_op[foodKey].note}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </React.Fragment>
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
export default ThucDon;
