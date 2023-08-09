import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import {Icons, TouchableCo} from '../../elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIconss';
import {useForm, Controller} from 'react-hook-form';
import {navigate} from '../../utils/modules';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const TaoLoiNhanMoi = ({navigation}) => {
  const [choise, setchoise] = useState(true);
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = async data => {
    const {content} = data;
    console.log(content);

    reset({content: ''});
  };
  const [inputHeight, setInputHeight] = useState(40);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
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
          <TouchableCo onPress={() => navigation.goBack()}>
            <Icons name={'close'} size={21} color={'black'} />
          </TouchableCo>
          <Text style={{color: 'black', fontSize: 19, marginVertical: -2}}>
            Tạo Lời nhắn mới{' '}
          </Text>
          <TouchableCo onPress={handleSubmit(onSubmit)}>
            <Text style={{color: 'black', fontSize: 17}}>Gửi </Text>
          </TouchableCo>
        </View>
        <View style={{marginVertical: 25}}>
          <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
            Nhắn cho ngày
          </Text>
          <View
            style={{
              height: Sizes.device_width < Sizes.device_height,
              width: 300,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 30,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              // marginTop: insets.top,
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Ionicons name={'calendar-outline'} size={30} color={'#EE4B4B'} />
            <Text style={{color: 'black', fontSize: 16, marginVertical: 5}}>
              Thứ hai,ngày 24 tháng 7
            </Text>
          </View>
        </View>
        <View style={{marginTop: -20}}>
          <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
            Hình ảnh
          </Text>
          <View
            style={{
              height: Sizes.device_width < Sizes.device_height,
              width: 60,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 30,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              // marginTop: insets.top,
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Ionicons name={'add-circle'} size={30} color={'#898F9D'} />
          </View>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
            Nội dung
          </Text>
          {errors.content && (
            <Text style={{color: 'red', marginLeft: 30}}>
              Nội dung không được để trống
            </Text>
          )}
          <View
            style={{
              height: 200,
              width: 300,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginHorizontal: 30,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              // marginTop: insets.top,
              // flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <SafeAreaView>
              <ScrollView>
                <Controller
                  control={control}
                  name="content"
                  defaultValue=""
                  rules={{required: true}}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <TextInput
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      value={value}
                      placeholder="Nhập nội dung..."
                      placeholderTextColor="gray"
                      autoCapitalize="none"
                      onChangeText={onChange}
                      color="black"
                      multiline
                      maxLength={255}
                      onContentSizeChange={e => {
                        setInputHeight(e.nativeEvent.contentSize.height);
                      }}
                    />
                  )}
                />
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEC8C8',
    justifyContent: 'flex-start',
  },
});
export default TaoLoiNhanMoi;
