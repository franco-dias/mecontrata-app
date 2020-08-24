import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import withLayout from '../../components/Layout/withLayout';

import api from '../../resources/api';
import ServiceCard from '../../components/ServiceCard';
import Typography from '../../components/Typography';
import capitalizeWords from '../../utils/capitalizeWords';
import {
  ServicesWrapper,
  CardWrapper,
} from './style';

const CategoryServices = ({ route, navigation }) => {
  const [category, setCategory] = useState({});
  const [services, setServices] = useState([]);
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
        setServices(list);
      } catch (e) {
        console.log(e);
      }
    };

    const getCategory = async () => {
      try {
        const { data } = await api.get(`/category/${id}`);
        setCategory(data);
      } catch (e) {
        console.log(e);
      }
    };

    getServices();
    getCategory();
  }, [id]);

  useEffect(() => {
    console.log(services);
  }, [services]);

  return (
    <View>
      <Typography variant="title">
        {capitalizeWords(category?.description)}
      </Typography>
      <ServicesWrapper>
        {services.map((service) => (
          <CardWrapper key={service.id}>
            <ServiceCard
              color={service.category?.color}
              url={`http://10.0.2.2:3333/${service.photos[0]?.url}`}
              name={service.user.name}
              occupation={service.job?.description}
              onPress={() => navigation.navigate('AdService', { id: service.id })}
            />
          </CardWrapper>
        ))}
      </ServicesWrapper>
    </View>
  );
};

export default withLayout(CategoryServices);
