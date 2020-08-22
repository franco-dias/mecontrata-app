import React from 'react';
import { View } from 'react-native';

import IconButton from '../components/IconButton';
import Typography from '../components/Typography';
import Icon from '../components/Icon';

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

const CustomDrawer = ({ navigation }) => (
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
        <MenuItem onPress={() => navigation.navigate('MyServices')}>
          <Typography variant="subtitle"> Meus serviços </Typography>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('NewAnnouncement')}>
          <Typography variant="subtitle"> Oferecer um serviço </Typography>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('SandboxFranco')}>
          <Typography variant="subtitle"> Sandbox Franco </Typography>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('SandboxRonaldo')}>
          <Typography variant="subtitle"> Sandbox Ronaldo </Typography>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('SandboxEmmanuel')}>
          <Typography variant="subtitle"> Sandbox Emmanuel </Typography>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('SandboxJoao')}>
          <Typography variant="subtitle"> Sandbox João </Typography>
        </MenuItem>
      </View>
      <MenuItem>
        <Typography variant="subtitle"> Sair </Typography>
      </MenuItem>
    </MenuContainer>
  </DrawerContainer>
);

export default CustomDrawer;
