import React from 'react';

import { useAuth } from '../contexts/AuthContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <AppRoutes />;
  }
  return <AuthRoutes />;
};

export default Routes;
