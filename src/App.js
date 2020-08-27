import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/AuthContext';
import Routes from './routes';
import { SafeArea, AppView } from './style';

const App = () => (
  <SafeArea>
    <AuthProvider>
      <NavigationContainer style={{ flex: 1 }}>
        <AppView>
          <Routes />
        </AppView>
      </NavigationContainer>
    </AuthProvider>
  </SafeArea>
);

export default App;
