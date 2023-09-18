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
import {Icons, Loading, TouchableCo} from '../../elements';
// import Icon from 'react-native-vector-icons/MaterialIconss';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {FetchApi} from '../../utils/modules';
import {ResetFunction} from '../../utils/modules';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TaoLoiNhanMoi = ({navigation}) => {
  const studentId = useSelector(state => state?.data?.data?._id);
  const {data, isLoading} = useQuery(['NewListSend'], async () => {
    const ID = await AsyncStorage.getItem('studentId');
    let updatestudenID;
    if (ID) {
      updatestudenID = ID;
    } else {
      updatestudenID = studentId;
    }

    const send = await FetchApi.getListSend(updatestudenID);
    return send;
  });
  const {data: cate, isLoadings} = useQuery(['NewListCate'], async () => {
    const ID = await AsyncStorage.getItem('studentId');
    let updatestudenID;
    if (ID) {
      updatestudenID = ID;
    } else {
      updatestudenID = studentId;
    }
    const cate = await FetchApi.getAdviceCate(updatestudenID);
    return cate;
  });

  const [open1, setOpen1] = useState(false);
  const item1 = (data || []).map(item => ({
    label: item.full_name,
    value: item.user_id,
  }));
  const item2 = (cate || []).map(item => ({
    label: item.title,
    value: item.category_id,
  }));
  // const [items1, setItems1] = useState(
  //   (data || []).map((item, index) => ({
  //     label: item.full_name,
  //     value: item.user_id,
  //   })),
  // );
  const [open2, setOpen2] = useState(false);
  // const [items2, setItems2] = useState(
  //   (cate || []).map((item, index) => ({
  //     label: item.title,
  //     value: item.category_id,
  //   })),
  // );
  // if (isLoading) {
  //   return <Loading />;
  // }

  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
    formState: {errors: errorss},
  } = useForm();
  const [submiting, setSubmiting] = useState(false);
  const onSubmit = async data => {
    try {
      setSubmiting(true);
      const {content, user_id, category_id, title} = data;
      const ID = await AsyncStorage.getItem('studentId');
      let updatestudenID;
      if (ID) {
        updatestudenID = ID;
      } else {
        updatestudenID = studentId;
      }
      const result = await FetchApi.postAdvice({
        content: content,
        user_id: user_id,
        category_id: category_id,
        title: title,
        student_id: updatestudenID,
      });
      if (result._msg_code == 1) {
        Alert.alert(result._msg_text);
        ResetFunction.resetToAdvice();
        // navigation.navigate('XinNghi');
      } else {
        Alert.alert(result._msg_text);
      }
    } catch (err) {
      console.log('err', err);
    }

    reset({content: ''});
  };

  const [inputHeight, setInputHeight] = useState(40);

  return (
    <View style={styles.container}>
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
      <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
        Giao viên nhận
      </Text>
      <Controller
        control={control}
        name="user_id"
        defaultValue=""
        rules={{required: 'Chưa chọn giáo viên nhận'}}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <DropDownPicker
              style={styles.drop}
              open={open1}
              value={value}
              items={item1}
              setOpen={setOpen1}
              setValue={onChange}
              setItems={item1}
              placeholder="Chọn người nhận"
            />
          </View>
        )}
      />
      <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
        Danh mục lời nhắn
      </Text>
      <Controller
        control={control}
        name="category_id"
        defaultValue=""
        rules={{required: 'Chưa chọn danh mục lời nhắn'}}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <DropDownPicker
              style={styles.drop}
              open={open2}
              value={value}
              items={item2}
              setOpen={setOpen2}
              setValue={onChange}
              setItems={item2}
              placeholder="Chọn danh mục"
            />
          </View>
        )}
      />
      <KeyboardAwareScrollView enableOnAndroid={true}>
        {/* <View style={{marginVertical: 25}}>
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
        </View> */}
        {/* <View style={{marginTop: -20}}>
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
        </View> */}

        <View>
          <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
            Tiêu đề lời nhắn
          </Text>
          {errors.content && (
            <Text style={{color: 'red', marginLeft: 30}}>
              Tiêu đề không được để trống
            </Text>
          )}
          <View
            style={{
              height: 100,
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
                  name="title"
                  defaultValue=""
                  rules={{required: true}}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <TextInput
                      style={styles.input}
                      underlineColorAndroid="transparent"
                      value={value}
                      placeholder="Nhập tiêu đề..."
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
        <View>
          <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
            Nội dung
          </Text>
          {errorss.title && (
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
  drop: {
    width: 300,
    height: 40,
    borderWidth: 0,
    padding: 10,
    color: 'black',
    marginHorizontal: 30,
    marginBottom: 15,
    zIndex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginHorizontal: 30,
  },
});
export default TaoLoiNhanMoi;
