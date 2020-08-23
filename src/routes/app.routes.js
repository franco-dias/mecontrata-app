import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import CustomDrawer from './CustomDrawer';

const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    drawerType="slide"
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        gestureEnabled: false,
        swipeEnabled: false,
      }}
    />
    <AppStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        gestureEnabled: false,
        swipeEnabled: false,
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
