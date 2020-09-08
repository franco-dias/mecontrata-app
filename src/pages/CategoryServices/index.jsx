import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-simple-toast';

import withLayout from '../../components/Layout/withLayout';
import api from '../../resources/api';
import EmptyState from '../../components/EmptyState';
import ServiceCard from '../../components/ServiceCard';
import Typography from '../../components/Typography';
import capitalizeWords from '../../utils/capitalizeWords';
import {
  ServicesWrapper,
  CardWrapper,
  TitleWrapper,
} from './style';

const CategoryServices = ({ route, navigation }) => {
  const [category, setCategory] = useState({});
  const [services, setServices] = useState([]);
  const [emptyState, setEmptyState] = useState(false);
  const { id } = route.params;

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await api.get(`/ad/category/${id}`, {
          params: {
            orderBy: 'createdAt',
            order: 'DESC',
            page: 1,
            perPage: 100,
          },
        });
        const { list } = data;
        if (!list.length) {
          setEmptyState(true);
        }
        setServices(list);
      } catch (e) {
        Toast.show('Não foi possível buscar os anúncios.');
      }
    };

    const getCategory = async () => {
      try {
        const { data } = await api.get(`/category/${id}`);
        setCategory(data);
      } catch (e) {
        Toast.show('Não foi possível buscar os dados da categoria.');
      }
    };

    getServices();
    getCategory();
  }, [id]);

  return (
    <View>
      <TitleWrapper>
        <Typography variant="title">
          {capitalizeWords(category?.description)}
        </Typography>
      </TitleWrapper>
      {services.length ? (
        <ServicesWrapper>
          {services.map((service) => (
            <CardWrapper key={service.id}>
              <ServiceCard
                color={service.category?.color}
                url={`http://localhost:3333/${service.photos[0]?.url}`}
                name={service.user.name}
                occupation={service.job?.description}
                onPress={() => navigation.navigate('AdService', { id: service.id })}
              />
            </CardWrapper>
          ))}
        </ServicesWrapper>
      ) : emptyState && (
        <EmptyState
          imageName="EmptyInbox"
          message="Ainda não há anúncios nessa categoria."
        />
      )}
    </View>
  );
};

export default withLayout(CategoryServices);
