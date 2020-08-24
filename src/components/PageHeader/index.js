import React from 'react';

import IconButton from '../IconButton';
import Icon from '../Icon';

import { Container, MenuButton, SearchButton } from './style';

const PageHeader = ({ navigation }) => (
  <Container>
    <MenuButton>
      <IconButton onPress={() => navigation.toggleDrawer()}>
        <Icon lib="MaterialDesign" iconName="sort" size={24} color="#666" />
      </IconButton>
    </MenuButton>
    <SearchButton>
      <IconButton onPress={() => navigation.navigate('SearchServices')}>
        <Icon lib="MaterialDesign" iconName="search" size={24} color="#666" />
      </IconButton>
    </SearchButton>
  </Container>
);

export default PageHeader;
