import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import {FetchApi} from '../../utils/modules';
import {useQuery} from 'react-query';
import {Loading} from '../../elements';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TinTuc = ({navigation}) => {
  const studentId = useSelector(state => state.data.data._id);
  const {data, isLoading} = useQuery('useGetNewsType', () =>
    FetchApi.getNews(studentId),
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
          <Text style={{color: 'black', fontSize: 20}}>Tin Tức</Text>
          <Ionicons name={'add-circle-sharp'} size={30} color={'white'} />
        </View>

        {(data || []).map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{flexDirection: 'row'}}
              onPress={() =>
                navigation.navigate('NewAndBlogDetail', {dataProps: item})
              }>
              <View style={styles.blockList} key={index}>
                <Image
                  style={{width: 120, height: 75}}
                  source={{
                    uri: item.url_image,
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
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'gray',
                      fontSize: Sizes.h6,
                    }}
                    multipleLines={true}
                    numberOfLines={3}>
                    {item.note}
                  </Text>
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
