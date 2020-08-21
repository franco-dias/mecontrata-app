import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  Row,
  Col,
  UserPhoto,
  UsernameAndIcon,
} from './style';

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

function AdService({
  navigation,
}) {
  return (
    <Container>
      <PageHeader navigation={navigation} />
      <Row>
        <UserPhoto source={{ uri: 'https://avatars3.githubusercontent.com/u/33707685?s=60&v=4' }} />
        <Col>
          <UsernameAndIcon>
            <Typography variant="title" color="#333951">
              Ronaldo Alves
            </Typography>
            <Icon lib="AntDesign" iconName="like2" color="#000" size={20} />
          </UsernameAndIcon>
          <Typography variant="subtitle" color="#333951">
            Carpinteiro
          </Typography>
        </Col>
      </Row>
      <Row>
        <Typography variant="text" color="#333951">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
      </Row>

      <Row>
        <Typography variant="subtitle" color="#333951">
          Fotos
        </Typography>
      </Row>

      <Row>
        <Button label="Entrar em contato" />
      </Row>
    </Container>
  );
}

export default AdService;
