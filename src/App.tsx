import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
    <AppContainer>
      <StatusBar barStyle="light-content" backgroundColor="#f6f6f6" />
      <Routes />
    </AppContainer>
  </View>
);

export default App;
