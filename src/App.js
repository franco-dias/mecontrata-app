import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes/app.routes';

import { SafeArea, AppView } from './style';

const App = () => (
  <SafeArea>
    <NavigationContainer style={{ flex: 1 }}>
      <AppView>
        <AppRoutes />
      </AppView>
    </NavigationContainer>
  </SafeArea>
);

export default App;
