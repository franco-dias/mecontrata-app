import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SandboxRonaldo from '../pages/SandboxRonaldo';
import Dashboard from '../pages/Dashboard';
import CustomDrawer from './CustomDrawer';

const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator drawerType="slide" drawerContent={(props) => <CustomDrawer {...props} />}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    {/* <AppStack.Screen name="SandboxRonaldo" component={SandboxRonaldo} /> */}
  </AppStack.Navigator>
);

export default AppRoutes;
