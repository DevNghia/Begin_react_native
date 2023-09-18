import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {Sizes} from '../../utils/resource';
import {Icons, TouchableCo} from '../../elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIconss';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';
import {FetchApi, ResetFunction} from '../../utils/modules';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading} from '../../elements';
const TaoDonXinNghi = ({navigation}) => {
  const studentId = useSelector(state => state?.data?.data?._id);
  const {data, isLoading} = useQuery(['NewListSend'], async () => {
    const ID = await AsyncStorage.getItem('studentId');
    let updatestudenID;
    if (ID) {
      updatestudenID = ID;
    } else {
      updatestudenID = studentId;
    }
    const listsend = await FetchApi.getListSend(updatestudenID);
    return listsend;
  });
  // if (isLoading) {
  //   return <Loading />;
  // }
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  const [submiting, setSubmiting] = useState(false);
  const onSubmit = async data => {
    try {
      setSubmiting(true);
      const {description, user_id, from_date, to_date} = data;
      const ID = await AsyncStorage.getItem('studentId');
      let updatestudenID;
      if (ID) {
        updatestudenID = ID;
      } else {
        updatestudenID = studentId;
      }
      const result = await FetchApi.postOffSchool({
        description: description,
        user_id: user_id,
        student_id: updatestudenID,
        from_date: from_date,
        to_date: to_date,
      });
      if (result._msg_code == 1) {
        Alert.alert(result._msg_text);
        ResetFunction.resetToOff();
        // navigation.navigate('XinNghi');
      } else {
        Alert.alert(result._msg_text);
      }
    } catch (err) {
      console.log('err', err);
    }
  };
  const [open, setOpen] = useState(false);
  // const [items, setItems] = useState(
  //   (data || []).map((item, index) => ({
  //     label: item.full_name,
  //     value: item.user_id,
  //   })),
  // );
  const items = (data || []).map(item => ({
    label: item.full_name,
    value: item.user_id,
  }));
  const [inputHeight, setInputHeight] = useState(40);

  //date_picker
  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);

  const showDatepicker1 = () => {
    setShowPicker1(true);
  };
  const showDatepicker2 = () => {
    setShowPicker2(true);
  };
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
          Tạo đơn xin nghỉ{' '}
        </Text>
        <TouchableCo onPress={handleSubmit(onSubmit)}>
          <Text style={{color: 'black', fontSize: 17}}>Gửi </Text>
        </TouchableCo>
      </View>

      <View style={{marginVertical: 5}}>
        <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
          Từ ngày
        </Text>
        <Controller
          control={control}
          name="from_date"
          defaultValue=""
          placeholder="Full Name"
          rules={{required: 'Chưa chọn ngày bắt đầu'}}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <Pressable onPress={showDatepicker1}>
              {error && <Text style={styles.errorText}>{error.message}</Text>}
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
                <Ionicons
                  name={'calendar-outline'}
                  size={30}
                  color={'#EE4B4B'}
                />
                <TextInput
                  style={{color: 'black'}}
                  underlineColorAndroid="transparent"
                  value={value ? new Date(value).toLocaleDateString() : ''}
                  placeholder="Từ ngày"
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  editable={false}
                />
              </View>
              {showPicker1 && (
                <DateTimePicker
                  value={value ? new Date(value) : new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate ? selectedDate.toISOString() : '');
                    setShowPicker1(false);
                  }}
                />
              )}
            </Pressable>
          )}
        />
      </View>
      <View>
        <Text style={{color: 'black', fontSize: 17, marginLeft: 30}}>
          Đên ngày
        </Text>
        <Controller
          control={control}
          name="to_date"
          defaultValue=""
          placeholder="Full Name"
          rules={{required: 'Chưa chọn ngày kết thúc'}}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <Pressable onPress={showDatepicker2}>
              {error && <Text style={styles.errorText}>{error.message}</Text>}
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
                <Ionicons
                  name={'calendar-outline'}
                  size={30}
                  color={'#EE4B4B'}
                />
                <TextInput
                  style={{color: 'black'}}
                  underlineColorAndroid="transparent"
                  value={value ? new Date(value).toLocaleDateString() : ''}
                  placeholder="Đến ngày"
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  editable={false}
                />
              </View>
              {showPicker2 && (
                <DateTimePicker
                  value={value ? new Date(value) : new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate ? selectedDate.toISOString() : '');
                    setShowPicker2(false);
                  }}
                />
              )}
            </Pressable>
          )}
        />
      </View>
      <Controller
        control={control}
        name="user_id"
        defaultValue=""
        rules={{required: 'Chưa chọn người nhận'}}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <DropDownPicker
              style={styles.drop}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={onChange}
              setItems={items}
              placeholder="Chọn người nhận"
            />
          </View>
        )}
      />
      <ScrollView>
        <View>
          <KeyboardAwareScrollView enableOnAndroid={true}>
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
              <ScrollView>
                <Controller
                  control={control}
                  name="description"
                  defaultValue=""
                  rules={{required: 'Chưa nhập nội dung'}}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <View>
                      {error && (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 14,
                            marginTop: 5,
                            marginHorizontal: 0,
                          }}>
                          {error.message}
                        </Text>
                      )}
                      <TextInput
                        style={[styles.input, {height: inputHeight}]}
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
                    </View>
                  )}
                />
              </ScrollView>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
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
    marginBottom: 20,
    // zIndex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginHorizontal: 30,
  },
});
export default TaoDonXinNghi;
