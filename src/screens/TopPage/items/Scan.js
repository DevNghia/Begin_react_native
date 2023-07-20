
import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert
  } from 'react-native';
  
  import QRCodeScanner from 'react-native-qrcode-scanner';
  import { RNCamera } from 'react-native-camera';
const  Scan = () => {
    const [light,setLight] = React.useState(false)
    onSuccess = e => {
      // Linking.openURL(e.data).catch(err =>
      //   console.error('An error occured', err)
      // );
      Alert.alert(e.data)
      };
    return (
        <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={light?RNCamera.Constants.FlashMode.torch :RNCamera.Constants.FlashMode.off  }
        reactivate = {true}
        reactivateTimeout = {3000}
        cameraTimeout = {10000}
        showMarker ={true}
        topContent={
          <Text style={styles.centerText}>
           
            <Text style={styles.textBold}>Quét đê</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}  onPress={() => {setLight(!light)}}>
            <Text style={styles.buttonText}>{!light? 'bật đèn':'tắt đèn'}</Text>
          </TouchableOpacity>
        }
      />
    );
  }
  const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });
  export default Scan;