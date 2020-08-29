import React, { useEffect, useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Toast from 'react-native-simple-toast';
import Typography from '../../components/Typography';
import Icon from '../../components/Icon';
import ServiceCard from '../../components/ServiceCard';
import withLayout from '../../components/Layout/withLayout';
import { useAuth } from '../../contexts/AuthContext';
import capitalizeWords from '../../utils/capitalizeWords';
import {
  Container,
  PageContent,
  TitleWrapper,
  ServiceWrapper,
  CardWrapper,
} from './style';
import api from '../../resources/api';

const MyServices = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const { userData } = useAuth();
  const getServices = useCallback(async () => {
    try {
      const response = await api.get(`/ad/user/${userData.id}`, {
        params: {
          page: 1,
          perPage: 200,
          orderBy: 'createdAt',
          order: 'DESC',
        },
      });
      setServices(response.data.list);
    } catch (e) {
      Toast.show('Ocorreu um erro ao buscar a listagem de anúncios.');
    }

    return () => {};
  }, [userData.id]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => getServices());
    return unsubscribe;
  }, [navigation, getServices]);

  useEffect(() => {
    if (userData.id) getServices();
  }, [userData.id]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/ad/${id}`);
      getServices();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Typography variant="title">
          Meus serviços
        </Typography>
        <TouchableOpacity onPress={() => navigation.navigate('NewAnnouncement')}>
          <Icon lib="MaterialDesign" iconName="add" color="#000" size={20} />
        </TouchableOpacity>
      </TitleWrapper>

      <PageContent>
        <ServiceWrapper>
          {services.map((service) => (
            <CardWrapper key={service.id}>
              <ServiceCard
                color={service.category?.color}
                url={`http://10.0.2.2:3333/${service.photos[0]?.url}`}
                name={service.job?.description}
                occupation={capitalizeWords(service.category?.description)}
                trash
                onPress={() => navigation.navigate('AdService', { id: service.id })}
                onTrashClick={() => handleDelete(service.id)}
              />
            </CardWrapper>
          ))}
        </ServiceWrapper>
      </PageContent>

    </Container>
  );
};

export default withLayout(MyServices);
