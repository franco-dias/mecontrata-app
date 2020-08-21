import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SandboxRonaldo from '../pages/SandboxRonaldo';
import SandboxJoao from '../pages/SandboxJoao';
import SandboxFranco from '../pages/SandboxFranco';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import CustomDrawer from './CustomDrawer';

const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator drawerType="slide" drawerContent={(props) => <CustomDrawer {...props} />}>
    {/* <AppStack.Screen name="Dashboard" component={Dashboard} /> */}
    {/* <AppStack.Screen name="SandboxRonaldo" component={SandboxRonaldo} /> */}
    <AppStack.Screen name="SignUp" component={SignUp} />
    {/* <AppStack.Screen name="SandboxJoao" component={SandboxJoao} /> */}
  </AppStack.Navigator>
);

export default AppRoutes;
