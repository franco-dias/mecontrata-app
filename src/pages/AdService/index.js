import React, { useState, useEffect, useCallback } from 'react';
import { Image } from 'react-native';
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
import withLayout from '../../components/Layout/withLayout';

import Announcement from '../../resources/announcement';

function AdService({
  adId,
}) {
  const [adData, setAdData] = useState({});
  const getAdData = useCallback(async (id) => {
    Announcement.getOne(id)
      .then((data) => setAdData(data))
      .catch((error) => console.log(error));
  }, [Announcement]);

  useEffect(() => {
    getAdData(2);
  }, []);

  return (
    <Container>
      <Row>
        <UserPhoto source={{ uri: `http://10.0.2.2/${adData.user?.avatar.url}` }} />
        <Col>
          <UsernameAndIcon>
            <Typography variant="title" color="#333951">
              {adData.user?.name}
            </Typography>
            <Icon lib="AntDesign" iconName="like2" color="#000" size={20} />
          </UsernameAndIcon>
          <Typography variant="subtitle" color="#333951">
            {adData.category?.description}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Typography variant="text" color="#333951">
          {adData.description}
        </Typography>
      </Row>

      <Row>
        <Typography variant="subtitle" color="#333951">
          Fotos
        </Typography>
      </Row>
      {adData.photos?.map((p, idx) => (
        <Image
          width={100}
          height={100}
          key={idx}
          source={{ uri: `http://10.0.2.2/${p.url}` }}
        />
      ))}
      <Row>
        <Button label="Entrar em contato" />
      </Row>
    </Container>
  );
}

export default withLayout(AdService);
