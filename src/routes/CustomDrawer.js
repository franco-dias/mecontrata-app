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
