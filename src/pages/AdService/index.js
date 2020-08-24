import React, { useState, useEffect, useMemo } from 'react';
import { Linking } from 'react-native';

import {
  Container,
  Row,
  Col,
  UserPhoto,
  UsernameAndIcon,
  ButtonContainer,
} from './style';

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import withLayout from '../../components/Layout/withLayout';
import api from '../../resources/api';
import capitalizeWords from '../../utils/capitalizeWords';

import Gallery from '../../components/Gallery';

function AdService({
  route,
  navigation,
}) {
  const { id } = route.params;
  const [adData, setAdData] = useState({});

  useEffect(() => {
    const getAdData = async () => {
      try {
        const { data } = await api.get(`/ad/${id}`);
        setAdData(data);
      } catch (e) {
        console.log(e);
      }
    };
    getAdData();
  }, [id]);

  const gallery = useMemo(
    () => adData.photos?.map((photo) => `http://10.0.2.2:3333/${photo.url}`),
    [adData],
  );

  return (
    <Container>
      <Row>
        <UserPhoto source={{ uri: `http://10.0.2.2:3333/${adData.user?.avatar?.url}` }} />
        <Col>
          <UsernameAndIcon>
            <Typography variant="subtitle" color="#333951">
              {adData.user?.name}
            </Typography>
            <Icon lib="AntDesign" iconName="like2" color="#000" size={20} />
          </UsernameAndIcon>
          <Typography variant="text" color="#333951">
            {capitalizeWords(adData.job?.description)}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Typography variant="text" color="#333951">
          {adData?.description}
        </Typography>
      </Row>

      <Row>
        <Typography variant="subtitle" color="#333951">
          Fotos
        </Typography>
      </Row>
      <Gallery photos={gallery} />
      <ButtonContainer>
        <Button
          label="Entrar em contato"
          onPress={() => Linking.openURL(`whatsapp://send?text=Olá!&phone=${adData?.user?.phoneNumber}`)}
        />
      </ButtonContainer>
    </Container>
  );
}

export default withLayout(AdService);
