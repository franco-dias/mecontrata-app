import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import CategoryServices from '../pages/CategoryServices';
import AdService from '../pages/AdService';
import SearchServices from '../pages/SearchServices';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    initialRouteName="SignIn"
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
