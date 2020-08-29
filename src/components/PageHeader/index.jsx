import React from 'react';

import IconButton from '../IconButton';
import Icon from '../Icon';
import {
  Container,
  MenuButton,
  SearchButton,
  StyledLogo,
  GoBackButton,
  GoBackButtonText,
} from './style';
import { useAuth } from '../../contexts/AuthContext';

const PageHeader = ({ navigation, route }) => {
  const { authenticated } = useAuth();

  const handleRightIconClick = () => {
    if (route.name === 'Dashboard') {
      return navigation.navigate('SearchServices');
    }
    return navigation.goBack();
  };

  return (
    <Container>
      <MenuButton>
        {authenticated ? (
          <IconButton onPress={() => navigation.toggleDrawer()}>
            <Icon lib="MaterialDesign" iconName="sort" size={24} color="#666" />
          </IconButton>
        ) : (
          <IconButton onPress={() => navigation.navigate('SignIn')}>
            <Icon lib="MaterialCommunityDesign" iconName="login" size={24} color="#666" />
          </IconButton>
        )}
      </MenuButton>
      <StyledLogo width={120} height={40} />
      <SearchButton>
        <IconButton onPress={handleRightIconClick}>
          {route.name === 'Dashboard' ? (
            <Icon lib="MaterialDesign" iconName="search" size={24} color="#666" />
          ) : (
            <GoBackButton onPress={handleRightIconClick}>
              <GoBackButtonText>Voltar</GoBackButtonText>
            </GoBackButton>
          )}
        </IconButton>
      </SearchButton>
    </Container>
  );
};

export default PageHeader;
