import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SplashScreen from '../components/SplashScreen';
import api from '../resources/api';
import { LoadingView } from '../style';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  const setAuthData = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    const onProviderStart = async () => {
      const user = await AsyncStorage.getItem('@MeContrata/User');
      if (user) {
        setAuthData(JSON.parse(user));
      }
      setLoading(false);
    };

    onProviderStart();
  }, []);

  useEffect(() => {
    const requestId = api.interceptors.request.use((config) => {
      setLoader(true);
      return config;
    });
    const responseId = api.interceptors.response.use(
      (response) => {
        setLoader(false);
        return response;
      },
      (error) => {
        setLoader(false);
        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestId);
      api.interceptors.response.eject(responseId);
    };
  });

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await api.post('/session', { email, password });
      const { user, token } = data;
      await AsyncStorage.multiSet([
        ['@MeContrata/Token', `Bearer ${token}`],
        ['@MeContrata/User', JSON.stringify(user)],
      ]);
      setAuthData(user, `Bearer ${token}`);
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    setUserData(null);
    await AsyncStorage.multiRemove([
      '@MeContrata/Token',
      '@MeContrata/User',
    ]);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      {loader && (
        <LoadingView>
          <ActivityIndicator size="large" color="#6C6CE5" />
        </LoadingView>
      )}
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
