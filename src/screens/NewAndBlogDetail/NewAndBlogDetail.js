import React from 'react';
import {ScrollView, Text, Image, useWindowDimensions} from 'react-native';
import {useQuery} from 'react-query';
import {FetchApi} from '../../utils/modules';
import {Sizes} from '../../utils/resource';
import HTML from 'react-native-render-html';
import {Loading} from '../../elements';
import {useSelector} from 'react-redux';
const NewAndBlogDetail = ({navigation, route}) => {
  const studentId = useSelector(state => state.data.data._id);
  const contentWidth = useWindowDimensions().width;
  const datas = route.params?.dataProps;
  const {data, isError, refetch, error, isLoading} = useQuery(
    ['NewAndBlogDetail'],
    () => FetchApi.getNewsDetail(datas.id, studentId),
  );

  if (isLoading) {
    return <Loading />;
  }
  // const isDarkMode = code === 'dark';
  return (
    <ScrollView
      style={{padding: Sizes.padding}}
      contentContainerStyle={{paddingBottom: 60}}>
      <HTML
        containerStyle={{flex: 1, width: '100%'}}
        ignoredStyles={['height', 'display', 'width']}
        contentWidth={contentWidth}
        source={{html: data?._data?.data_info?.content}}
        baseStyle={{color: 'black'}}
        // tagsStyles={{
        //   p: {color: 'black'},
        //   h1: {color: 'black'},
        //   span: {color: 'black'},
        // }}
        ignoredDomTags={['source']}
      />
    </ScrollView>
  );
};

export default NewAndBlogDetail;
