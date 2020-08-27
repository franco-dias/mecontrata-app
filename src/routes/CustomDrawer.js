import React from 'react';
import { View } from 'react-native';

import Typography from '../components/Typography';
import { useAuth } from '../contexts/AuthContext';

import {
  DrawerContainer,
  UserInfo,
  UserImage,
  UserName,
  UserEmail,
  HeaderRow,
  MenuItem,
  MenuContainer,
} from './style';

const CustomDrawer = ({ navigation }) => {
  const { authenticated, signOut, userData } = useAuth();
  return (
    <DrawerContainer>
      <HeaderRow>
        <UserInfo>
          <UserImage
            source={{
              uri: `http://10.0.2.2:3333/${userData?.avatar?.url}`,
            }}
          />
          <View>
            <UserName>
              { userData?.name || 'Convidado' }
            </UserName>
            <UserEmail>
              { userData?.email || '' }
            </UserEmail>
          </View>
        </UserInfo>
      </HeaderRow>
      <MenuContainer>
        <View>
          <MenuItem onPress={() => navigation.navigate('Dashboard')}>
            <Typography variant="subtitle">Início</Typography>
          </MenuItem>
          {authenticated && (
            <>
              <MenuItem onPress={() => navigation.navigate('MyServices')}>
                <Typography variant="subtitle">Meus serviços</Typography>
              </MenuItem>
              <MenuItem onPress={() => navigation.navigate('NewAnnouncement')}>
                <Typography variant="subtitle">Oferecer um serviço</Typography>
              </MenuItem>
            </>
          )}
          {
            !authenticated && (
              <>
                <MenuItem onPress={() => navigation.navigate('SignIn')}>
                  <Typography variant="subtitle">Realizar Login</Typography>
                </MenuItem>
                <MenuItem onPress={() => navigation.navigate('SignUp')}>
                  <Typography variant="subtitle">Criar uma conta</Typography>
                </MenuItem>
              </>
            )
          }
        </View>
        {authenticated && (
        <MenuItem onPress={() => {
          signOut();
          navigation.closeDrawer();
        }}
        >
          <Typography variant="subtitle"> Sair </Typography>
        </MenuItem>
        )}
      </MenuContainer>
    </DrawerContainer>
  );
};

export default CustomDrawer;
