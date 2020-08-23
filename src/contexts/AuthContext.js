import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api, { formDataApi } from '../resources/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const setAuthData = (user, token) => {
    console.log('setting token', token);
    api.interceptors.request.use((config) => {
      config.headers.authorization = token;
      return config;
    });
    formDataApi.interceptors.request.use((config) => {
      config.headers.authorization = token;
      return config;
    });
    setUserData(user);
  };

  useEffect(() => {
    const onProviderStart = async () => {
      const [token, user] = await AsyncStorage.multiGet([
        '@MeContrata/Token',
        '@MeContrata/User',
      ]);
      if (token[1] && user[1]) {
        setAuthData(user[1], token[1]);
      }
    };

    onProviderStart();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await api.post('/session', { email, password });
      const { user, token } = data;
      await AsyncStorage.multiSet([
        ['@MeContrata/Token', `Bearer ${token}`],
        ['@MeContrata/User', JSON.stringify(user)],
      ]);
      setAuthData(user, token);
    } catch (e) {}
  };

  const signOut = async () => {
    await AsyncStorage.multiRemove([
      '@MeContrata/Token',
      '@MeContrata/User',
    ]);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        signIn,
        signOut,
        authenticated: Boolean(userData),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('context cannot be accessed');
  }
  return context;
};

export default AuthProvider;
