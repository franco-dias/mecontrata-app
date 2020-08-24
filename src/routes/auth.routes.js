import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import MyServices from '../pages/MyServices';
import NewAnnouncement from '../pages/NewAnnouncement';
import CustomDrawer from './CustomDrawer';
import CategoryServices from '../pages/CategoryServices';
import AdService from '../pages/AdService';
import SearchServices from '../pages/SearchServices';

const AppStack = createDrawerNavigator();

const AuthRoutes = () => (
  <AppStack.Navigator
    drawerType="slide"
    drawerContent={(props) => <CustomDrawer {...props} />}
    unmountInactiveRoutes
    navigationOptions={{
      unmountInactiveRoutes: true,
    }}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="MyServices" component={MyServices} />
    <AppStack.Screen name="NewAnnouncement" component={NewAnnouncement} />
    <AppStack.Screen name="CategoryServices" component={CategoryServices} />
    <AppStack.Screen name="AdService" component={AdService} />
    <AppStack.Screen name="SearchServices" component={SearchServices} />
  </AppStack.Navigator>

);

export default AuthRoutes;
