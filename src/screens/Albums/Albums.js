import * as React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
const Albums = ({route}) => {
  const studentId = useSelector(state => state.data.data._id);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Albums</Text>
    </View>
  );
};
export default Albums;
