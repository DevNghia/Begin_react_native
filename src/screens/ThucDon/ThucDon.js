import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
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
const ThucDon = () => {
  const studentId = useSelector(state => state.data.data._id);
  const contentWidth = useWindowDimensions().width;
  const {data, isLoading} = useQuery(['NewThucDon'], () =>
    FetchApi.getMenus(studentId),
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
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Thực đơn </Text>
        </View>
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
          <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
            {data.day_at}
          </Text>
        </View>
        {(data.meal || []).map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Text style={{color: 'black', marginHorizontal: 20}}>
                {item.meal_title}
              </Text>
              {/* Lặp qua thuộc tính của "food_op" */}
              {Object.keys(item.food_op || {}).map(foodKey => {
                // console.log('test thực đơn: ', item.food_op[foodKey].title);
                return (
                  <View style={styles.blockList}>
                    <Image
                      style={{width: 120, height: 75}}
                      source={{
                        uri: item.food_op[foodKey].image,
                      }}
                    />
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'black',
                          fontSize: Sizes.h5,
                        }}
                        multipleLines={true}
                        numberOfLines={2}>
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
