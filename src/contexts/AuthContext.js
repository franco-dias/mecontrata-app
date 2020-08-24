import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

import { View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api, { formDataApi } from '../resources/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const setAuthData = (user, token) => {
    const interceptorRequest = (config) => {
      config.headers.authorization = token;
      return config;
    };

    api.interceptors.request.use(interceptorRequest);
    formDataApi.interceptors.request.use(interceptorRequest);
    // api.interceptors.response.use(interceptorResponse);
    // formDataApi.interceptors.response.use(interceptorResponse);
    setUserData(user);
  };

  useEffect(() => {
    const onProviderStart = async () => {
      const [token, user] = await AsyncStorage.multiGet([
        '@MeContrata/Token',
        '@MeContrata/User',
      ]);
      if (token[1] && user[1]) {
        setAuthData(JSON.parse(user[1]), token[1]);
      }
      // setLoading(false);
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
      setAuthData(user, `Bearer ${token}`);
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
    <>
      {/* <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          flex: 1,
          zIndex: 99999,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View> */}
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
    </>
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
