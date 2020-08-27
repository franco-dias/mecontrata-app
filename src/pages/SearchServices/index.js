import React, { useState, useCallback } from 'react';
import Toast from 'react-native-simple-toast';

import api from '../../resources/api';
import Typography from '../../components/Typography';
import withLayout from '../../components/Layout/withLayout';
import ServiceCard from '../../components/ServiceCard';
import Input from '../../components/Input';
import {
  Container,
  TitleWrapper,
  InputWrapper,
  ScrollCard,
  CardWrapper,
} from './style';

function MyServices({ navigation }) {
  const [value, setValue] = useState('');
  const [services, setServices] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await api.get('/ad/search/list', {
        params: {
          s: value,
          page: 1,
          perPage: 200,
        },
      });
      setServices(data);
    } catch (e) {
      Toast.show('Ocorreu um erro ao buscar a listagem de anúncios.');
    }
  }, [api, value, setServices]);

  return (
    <Container>
      <TitleWrapper>
        <Typography variant="title">
          Pesquisar
        </Typography>
      </TitleWrapper>
      <InputWrapper>
        <Input
          iconName="search"
          placeholder="Pesquisar..."
          value={value}
          onChangeText={setValue}
          onIconPress={fetchData}
          onSubmitEditing={fetchData}
        />
      </InputWrapper>

      <ScrollCard>
        {services.map((service) => (
          <CardWrapper key={service.id}>
            <ServiceCard
              color={service.category?.color}
              url={`http://10.0.2.2:3333/${service.photos[0]?.url}`}
              name={service.user?.name}
              occupation={service.job?.description}
              onPress={() => navigation.navigate('AdService', { id: service.id })}
            />
          </CardWrapper>
        ))}
      </ScrollCard>

    </Container>
  );
}

export default withLayout(MyServices);
