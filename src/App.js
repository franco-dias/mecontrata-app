import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/AuthContext';

import Routes from './routes';
import { SafeArea, AppView } from './style';

const App = () => (
  <SafeArea>
    <NavigationContainer style={{ flex: 1 }}>
      <AuthProvider>
        <AppView>
          <Routes />
        </AppView>
      </AuthProvider>
    </NavigationContainer>
  </SafeArea>
);

export default App;
