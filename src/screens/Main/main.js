import * as React from 'react';
import { View, Text, StyleSheet, Image,  Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Main = ({ navigation }) => {
  const { navigate } = useNavigation();

  const onForgotPassword = () => {
    navigate('ForgotPassword');
  };

  const AppButton = ({ onPress, title }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handlePressIn = () => {
      setIsHovered(true);
    };

    const handlePressOut = () => {
      setIsHovered(false);
    };

    const buttonBackgroundColor = isHovered ? '#5F00D6' : '#fff';
    
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.appButtonContainer, { backgroundColor: buttonBackgroundColor }]}
      >
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={require('./logo1.png')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>Login Template</Text>
        <Text style={styles.text2}>The easiest way to start with your amazing application</Text>
        <AppButton onPress={() => navigation.navigate('Login')} title="Login" size="sm" />
        <AppButton onPress={() => navigation.navigate('Register')} title="Sign up" size="sm" />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
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
  text2: {
    color: 'black',
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
    color: "#5F00D6",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default Main;
