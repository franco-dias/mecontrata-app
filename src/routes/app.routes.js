import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import CustomDrawer from './CustomDrawer';
import CategoryServices from '../pages/CategoryServices';
import AdService from '../pages/AdService';
import SearchServices from '../pages/SearchServices';

const AppStack = createDrawerNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    drawerType="slide"
    drawerContent={(props) => <CustomDrawer {...props} />}
    navigationOptions={{
      unmountInactiveRoutes: true,
    }}
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
    <AppStack.Screen name="AdService" component={AdService} />
    <AppStack.Screen name="CategoryServices" component={CategoryServices} />
    <AppStack.Screen name="SearchServices" component={SearchServices} />
  </AppStack.Navigator>
);

export default AppRoutes;
