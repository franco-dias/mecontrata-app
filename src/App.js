import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/AuthContext';

import AppRoutes from './routes/app.routes';
import { SafeArea, AppView } from './style';

const App = () => (
  <SafeArea>
    <AuthProvider>
      <NavigationContainer style={{ flex: 1 }}>
        <AppView>
          <AppRoutes />
        </AppView>
      </NavigationContainer>
    </AuthProvider>
  </SafeArea>
);

export default App;
