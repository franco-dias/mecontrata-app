import React from 'react';
import { View, TouchableOpacity } from 'react-native';

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

const CustomDrawer = () => (
  <DrawerContainer>
    <HeaderRow>
      <UserInfo>
        <UserImage />
        <View>
          <UserName> John Doe </UserName>
          <UserEmail> john.doe@example.com </UserEmail>
        </View>
      </UserInfo>
      <Icon lib="MaterialDesign" iconName="sort" size={24} color="#666" />
    </HeaderRow>
    <MenuContainer>
      <View>
        <MenuItem>
          <Typography variant="subtitle"> Início </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="subtitle"> Meus serviços </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="subtitle"> Oferecer um serviço </Typography>
        </MenuItem>
      </View>
      <MenuItem>
        <Typography variant="subtitle"> Sair </Typography>
      </MenuItem>
    </MenuContainer>
  </DrawerContainer>
);

export default CustomDrawer;
