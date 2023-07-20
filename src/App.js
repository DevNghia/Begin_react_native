import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContent from './AppContent';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <AppContent/>
    </QueryClientProvider>
  
  );
}

export default App;