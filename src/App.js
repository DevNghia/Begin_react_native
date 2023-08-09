import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContent from './AppContent';
import {Provider} from 'react-redux';
import store from './store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  NotificationListner,
  requestUserPermission,
} from './utils/pushnotificationHelper';
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
