import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import MyServices from '../pages/MyServices';
import NewAnnouncement from '../pages/NewAnnouncement';
import CustomDrawer from './CustomDrawer';

const AppStack = createDrawerNavigator();

const AuthRoutes = () => (
  <AppStack.Navigator
    drawerType="slide"
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="MyServices" component={MyServices} />
    <AppStack.Screen name="NewAnnouncement" component={NewAnnouncement} />
  </AppStack.Navigator>

);

export default AuthRoutes;
