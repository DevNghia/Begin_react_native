import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const MyComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const data = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];

  return (
    <View>
      <SelectDropdown
        data={data}
        defaultButtonText="Chọn tháng"
        onSelect={(selectedItem, index) => {
          setSelectedItem(selectedItem);
          // You can perform any actions here based on the selected item
        }}
      />
    </View>
  );
};

export default MyComponent;
