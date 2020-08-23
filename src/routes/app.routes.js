import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AdService from '../pages/AdService';
import SandboxRonaldo from '../pages/SandboxRonaldo';
import SandboxJoao from '../pages/SandboxJoao';
import SandboxFranco from '../pages/SandboxFranco';
import SandboxEmmanuel from '../pages/SandboxEmmanuel';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import CustomDrawer from './CustomDrawer';
import MyServices from '../pages/MyServices';
// import NewAnnouncement from '../pages/NewAnnouncement';

const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator drawerType="slide" drawerContent={(props) => <CustomDrawer {...props} />}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="NewAnnouncement" component={NewAnnouncement} />
    <AppStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        gestureEnabled: false,
        swipeEnabled: false,
      }}
    />
    <AppStack.Screen name="MyServices" component={MyServices} />
    <AppStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        gestureEnabled: false,
        swipeEnabled: false,
      }}
    />
    <AppStack.Screen name="SandboxRonaldo" component={SandboxRonaldo} />
    <AppStack.Screen name="SandboxJoao" component={SandboxJoao} />
    <AppStack.Screen name="SandboxFranco" component={SandboxFranco} />
    <AppStack.Screen name="SandboxEmmanuel" component={SandboxEmmanuel} />
  </AppStack.Navigator>
);

export default AppRoutes;
