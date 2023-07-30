
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Button} from 'react-native';
import { Sizes } from '../../utils/resource';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native-ui-lib';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Table, TableWrapper, Row, Rows, Col,Cols,Cell } from 'react-native-table-component';



const  HocPhi = () => {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate)=> {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = 'Tháng ' + (tempDate.getMonth()+1) ;
    setText(fDate)
  }

  const showMode =(currentMode) =>{
    setShow(true);
    setMode(currentMode);
  } 

  const state = {
    tableHead: [ 'Tên phí', 'Số lượng', 'Thành Tiền'],
    tableData: [
      ['Ăn sáng', '26', '260000'],
      ['Ăn trưa', '26', '780000'],
      ['Học phí', '1', '3000000'],
      ['ngoại khóa', '1', '200000']
    ]
  }
  const state2 = {
    tableHead2: [ 'Số dư', 'Tổng thanh toán', 'Đã thanh toán'],
    tableData: [
      '1000000','7000000','6000000',
    ]
  }
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={{
      height: Sizes.device_width < Sizes.device_height,
      paddingHorizontal: 15,
      paddingVertical: 10,
   
      // marginTop: insets.top,
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     }}>
      <Text style={{color:'black',fontSize:20}}>HỌC PHÍ </Text>
    </View>
    <View style={{
      alignItems: 'center',
      paddingBottom:15,
      margin:10,

     }}>
      <View style={styles.image}>
      <Image source={require('../../utils/Icons/payments.png')}
        style={styles.avatar}/>
      </View>

    <Text style={{color:'black',fontSize:14,marginHorizontal:20,}}>Đang xem thông tin của bé Giang </Text>
    </View>
     

     <View style={styles.date}>
       <Text onPress={()=>showMode('date')} style={styles.text1}>{text}</Text>
     </View>
     {
      show && ( 
        <DateTimePicker 
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )
     }

   

    

        <Table style={styles.table}  borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            {/* <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table> 
          
        <Table style={styles.table}  borderStyle={{borderWidth: 1}}>
        <Cell data="" style={styles.singleHead}/>
          <TableWrapper style={styles.wrapper}>
          <Col data={state2.tableHead2} style={styles.title} heightArr={[30, 30, 30]} textStyle={styles.titleText}></Col>
          </TableWrapper>

          <TableWrapper style={styles.wrapper}>
            <Cols data={state2.tableData2} heightArr={[30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
 
   

      </ScrollView>
      
    </View>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FCEEEE',
      justifyContent: 'center',   
 
    },
    itemContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginHorizontal: 15,
      borderRadius: 8,
      padding: 10,
      backgroundColor:'#FFFFFF'
    },
    date:{
      justifyContent:'center',
      backgroundColor:'#48E958',
      height:50,
      marginHorizontal: 50,
      borderRadius: 15,
      alignItems:'center',
      marginBottom:20,

    },
    text1:{
      fontSize : 18,
      fontWeight: 'bold',
      color:'black'

    },
    image: {
      height:100,
      width:100,
      borderRadius: 50, // Đặt borderRadius thành nửa kích thước để làm hình ảnh tròn
      overflow: 'hidden', // Giữ cho hình ảnh không bị tràn ra khỏi khung
      marginBottom:10,
    },
    avatar: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
    table: { 
      flex: 1, 
      backgroundColor: '#fff', 
   
      marginHorizontal: 15,
      marginBottom:10,
    
    },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
  });
  export default HocPhi;