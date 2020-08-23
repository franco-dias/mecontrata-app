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
  const { authenticated, signOut } = useAuth();

  return (
    <DrawerContainer>
      <HeaderRow>
        <UserInfo>
          <UserImage />
          <View>
            <UserName> John Doe </UserName>
            <UserEmail> john.doe@example.com </UserEmail>
          </View>
        </UserInfo>
      </HeaderRow>
      <MenuContainer>
        <View>
          <MenuItem onPress={() => navigation.navigate('Dashboard')}>
            <Typography variant="subtitle">
              Início
            </Typography>
          </MenuItem>
          {authenticated && (
            <>
              <MenuItem onPress={() => navigation.navigate('MyServices')}>
                <Typography variant="subtitle"> Meus serviços </Typography>
              </MenuItem>
              <MenuItem onPress={() => navigation.navigate('NewAnnouncement')}>
                <Typography variant="subtitle"> Oferecer um serviço </Typography>
              </MenuItem>
            </>
          )}
          {
            !authenticated && (
              <>
                <MenuItem onPress={() => navigation.navigate('SignIn')}>
                  <Typography variant="subtitle"> Realizar Login </Typography>
                </MenuItem>
                <MenuItem onPress={() => navigation.navigate('SignUp')}>
                  <Typography variant="subtitle"> Criar uma conta </Typography>
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
