import React from 'react';

import IconButton from '../IconButton';
import Icon from '../Icon';

import { Container } from './style';

const PageHeader = ({ navigation }) => (
  <Container>
    <IconButton onPress={() => navigation.toggleDrawer()}>
      <Icon lib="MaterialDesign" iconName="sort" size={24} color="#666" />
    </IconButton>
    <IconButton>
      <Icon lib="MaterialDesign" iconName="search" size={24} color="#666" />
    </IconButton>
  </Container>
);

export default PageHeader;
