import * as React from 'react';
import {View, Text, ScrollView, useWindowDimensions} from 'react-native';
import {Sizes} from '../../utils/resource';
import HTML from 'react-native-render-html';
import {Loading} from '../../elements';
import {useQuery} from 'react-query';
import {FetchApi} from '../../utils/modules';
import {useSelector} from 'react-redux';
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
    <ScrollView
      style={{padding: Sizes.padding}}
      contentContainerStyle={{paddingBottom: 60}}>
      <HTML
        containerStyle={{flex: 1, width: '100%'}}
        ignoredStyles={['height', 'display', 'width']}
        contentWidth={contentWidth}
        source={{html: data?._data?.content}}
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
export default ThucDon;
