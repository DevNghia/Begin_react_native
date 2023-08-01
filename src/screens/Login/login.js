import React, {useState} from 'react';
import {
  View,
  Text,
  Input,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FetchApi} from '../../utils/modules';
import {AppButton} from '../../elements';
import {AccountService} from '../../utils/Account';
import {ResetFunction} from '../../utils/modules';
const Login = ({navigation}) => {
  const {handleSubmit, control} = useForm();
  const [submiting, setSubmiting] = useState(false);
  const onSubmit = async data => {
    try {
      setSubmiting(true);
      const {password, username, appcode} = data;
      const result = await FetchApi.login({
        username: username,
        password: password,
        appcode: 'R',
      });
      console.log('result: ', result);
      if (result._msg_code === 3) {
        const data_account = {...result._data, ...{password: password}};
        AccountService.set(data_account);
        ResetFunction.resetToChoose();
      }
    } catch (err) {
      console.log('err', err);
    }
    setSubmiting(false);
  };

  const [hidePass, setHidePass] = useState(true);
  const renderSecure = () => {
    return (
      <Icon
        size={20}
        color="green"
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}
        name={hidePass ? 'eye-slash' : 'eye'}
        onPress={() => setHidePass(!hidePass)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../Main/banner_kidsschool.png')}
        />
      </View>
      <View style={styles.content}>
        {/* <Text style={styles.text1}>Ki</Text> */}
        <SafeAreaView>
          <Controller
            control={control}
            name="username"
            defaultValue=""
            rules={{required: true}}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                value={value}
                placeholder="Tên đăng nhập"
                placeholderTextColor="green"
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
              <View>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  value={value}
                  placeholder="Mật khẩu"
                  placeholderTextColor="green"
                  autoCapitalize="none"
                  secureTextEntry={hidePass ? true : false}
                  onChangeText={onChange}
                />
                {renderSecure()}
              </View>
            )}
          />
        </SafeAreaView>
        <Text
          style={{color: 'gray', marginLeft: 180}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
        <AppButton
          onPress={handleSubmit(onSubmit)}
          disabled={submiting}
          title="Đăng nhập"
          size="sm"
        />
      </View>
      <View style={styles.footer}></View>
    </View>
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
  text1_giang: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 200,
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
});
export default Login;
