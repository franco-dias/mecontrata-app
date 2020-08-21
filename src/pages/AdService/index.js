import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PageHeader from '../../components/PageHeader';

import {
  Row, Col, UserPhoto, UsernameAndIcon,
} from './style';

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

function AdService({
  navigation, profilePhoto, labelName, labelOccupation, TextDetails,
}) {
  return (
    <KeyboardAvoidingView style={{
      flex: 1, alignItems: 'center', padding: 24, paddingTop: 72,
    }}
    >
      <PageHeader navigation={navigation} />
      <Row>
        <UserPhoto source={{ uri: profilePhoto }} />
        <Col>
          <UsernameAndIcon>
            <Typography variant="title" color="#333951">
              {labelName}
            </Typography>
            <Icon lib="AntDesign" iconName="like2" color="#000" size={20} />
          </UsernameAndIcon>
          <Typography variant="text" color="#333951">
            {labelOccupation}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Typography variant="text" color="#333951">
          {TextDetails}
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
    </KeyboardAvoidingView>
  );
}

export default AdService;
