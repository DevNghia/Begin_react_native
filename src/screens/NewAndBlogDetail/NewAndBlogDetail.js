import React from 'react';
import {ScrollView,Text,Image,useWindowDimensions} from 'react-native';
import {useQuery} from 'react-query';
import { FetchApi } from '../../utils/modules';
import { Sizes } from '../../utils/resource';
import HTML from 'react-native-render-html';

const NewAndBlogDetail = ({navigation, route}) => {
    const contentWidth = useWindowDimensions().width;
  const datas = route.params?.dataProps;
  console.log('nghĩadevvvvvvvvvvvvvvvvvvvvvvvvvv',datas.id);
  const {data, isError, refetch, error, isLoading} = useQuery(
    ['NewAndBlogDetail'],
    () => FetchApi.getNewsDetail(datas.id),
  );

//   if (isLoading) {
//     return <Loading />;
//   }
    // const isDarkMode = code === 'dark';
  return (
    <ScrollView
    style={{padding: Sizes.padding}}
    contentContainerStyle={{paddingBottom: 60}}>
    <Text style={{fontWeight: 'bold',color:'black'}}>{data?._data?.title}</Text>
    <Image
      source={{uri: data?._data?.file_name}}
      style={{
        width: Sizes.device_width - Sizes.padding * 2,
        height: ((Sizes.device_width - Sizes.padding * 2) * 9) / 16,
        marginVertical: Sizes.padding / 2,
      }}
    />

    {!!data?._data?.note && (
      <Text style={{fontWeight: 'bold', marginBottom: 10, color:'black'}}>
        {data?._data?.note}
      </Text>
    )}

    <HTML 
     containerStyle={{flex: 1, width: '100%'}}
     ignoredStyles={['height', 'display', 'width']}
     contentWidth={contentWidth}
    source={{html: data?._data?.description}} 
    tagsStyles={{ p: { color: 'black' }, span:{color:'black'} }}
    />
    
  </ScrollView> 
  );
};

export default NewAndBlogDetail;
