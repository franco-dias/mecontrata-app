import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Typography from '../../components/Typography';
import Icon from '../../components/Icon';
import ServiceCard from '../../components/ServiceCard';
import withLayout from '../../components/Layout/withLayout';

import api from '../../resources/api';

import {
  Container,
  PageContent,
  TitleWrapper,
  ServiceWrapper,
  CardWrapper,
} from './style';

const MyServices = () => {
  const [payload, setPayload] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let user = await AsyncStorage.getItem('@MeContrata/User');
      user = JSON.parse(user);

      const returnPayload = await api.get(`/ad/user/${user.id}?page=1&perPage=20`);
      setPayload(returnPayload.data);
    }

    fetchData();
    // api.get('/ad/user/:userId');
  }, []);
  console.log(JSON.stringify(payload, null, 1));
  return (
    <Container>
      <TitleWrapper>
        <Typography variant="title">
          Meus serviços
        </Typography>
        <Icon lib="MaterialDesign" iconName="add" color="#000" size={20} />
      </TitleWrapper>

      <PageContent>
        <ServiceWrapper>
          <FlatList
            data={payload.list}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <CardWrapper>
                  <ServiceCard
                    color={item.category.color}
                    photoURL={`http://10.0.2.2:3333/${item.photos[0].url}`}
                    name={item.user.name}
                    occupation={`${item.user.job} - ${item.user.city}/${item.user.state}`}
                    trash
                  />
                </CardWrapper>
              );
            }}
          />
        </ServiceWrapper>
      </PageContent>
    </Container>
  );
};

export default withLayout(MyServices);
