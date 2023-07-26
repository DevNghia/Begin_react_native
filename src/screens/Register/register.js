import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Input,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import {FetchApi} from '../../utils/modules';
import {AppButton} from '../../elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Register = ({navigation}) => {
  const {navigate} = useNavigation();
  const onLogin = () => {
    navigate('Login');
  };
  const {handleSubmit, control} = useForm();

  const [submiting, setSubmiting] = useState(false);

  const onSubmit = async data => {
    try {
      setSubmiting(true);
      const result = await FetchApi.register(data);
      setSubmiting(false);
      console.log('NghiaNC', result);
      if (result._msg_code == 1) {
        console.log('Đăng ký thành công');
        onLogin();
      }
    } catch (err) {
      console.log('err', err);
    }
  };
  const [selectedGender, setSelectedGender] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Nam', value: '1'},
    {label: 'Nữ', value: '0'},
  ]);
  const onChanges = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.tinyLogo}
            source={require('../Main/logo1.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text1}>Create Account</Text>

          <SafeAreaView>
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Phone"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="name"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Full Name"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="birthday"
              defaultValue=""
              placeholder="Full Name"
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <Pressable onPress={showDatepicker}>
                  <TextInput
                    style={styles.input}
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
                      display="spinner"
                      mode="date"
                      onChange={(event, selectedDate) => {
                        onChange(
                          selectedDate ? selectedDate.toISOString() : '',
                        );
                        setShow(false);
                      }}
                    />
                  )}
                </Pressable>
              )}
            />
            <Controller
              control={control}
              name="sex"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <DropDownPicker
                  style={styles.drop}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={onChange}
                  setItems={setItems}
                />
              )}
            />
            <Controller
              control={control}
              name="area"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Area"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="address"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Address"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Email"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Password"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="confirm_password"
              defaultValue=""
              rules={{required: true}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Confirm password"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="affiliate"
              defaultValue=""
              // rules={{ required: true }}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Affiliate"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  onChangeText={onChange}
                />
              )}
            />
          </SafeAreaView>

          <AppButton
            onPress={handleSubmit(onSubmit)}
            disabled={submiting}
            title="Sign up"
            size="sm"
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'gray', textAlign: 'center'}}>
              Already have an account?
            </Text>

            <Text
              style={{
                color: '#5F01D6',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Login
            </Text>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontSize: 30,
    color: '#5F01D6',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    marginVertical: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#5F00D6',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  input: {
    width: 290,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  drop: {
    width: 290,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
export default Register;
