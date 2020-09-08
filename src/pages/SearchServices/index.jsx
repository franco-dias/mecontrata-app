import React, { useState, useCallback } from 'react';
import Toast from 'react-native-simple-toast';

import withLayout from '../../components/Layout/withLayout';
import api from '../../resources/api';
import Typography from '../../components/Typography';
import ServiceCard from '../../components/ServiceCard';
import Input from '../../components/Input';
import EmptyState from '../../components/EmptyState';

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
  const [emptyState, setEmptyState] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await api.get('/ad/search/list', {
        params: {
          s: value,
          page: 1,
          perPage: 200,
        },
      });
      if (!data.length) {
        setEmptyState(true);
      }
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

      {services.length ? (
        <ScrollCard>
          {services.map((service) => (
            <CardWrapper key={service.id}>
              <ServiceCard
                color={service.category?.color}
                url={`http://localhost:3333/${service.photos[0]?.url}`}
                name={service.user?.name}
                occupation={service.job?.description}
                onPress={() => navigation.navigate('AdService', { id: service.id })}
              />
            </CardWrapper>
          ))}
        </ScrollCard>
      ) : (
        <EmptyState
          imageName="NoSearchResult"
          message={emptyState
            ? 'Não foram encontrados resultados. Tente novamente com outros filtros.'
            : 'Digite e clique na lupa para pesquisar!'}
        />
      )}

    </Container>
  );
}

export default withLayout(MyServices);
