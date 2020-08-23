import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    async function fetchData() {
      const returnPayload = await api.get('/ad/search', {
        params: {
          s: value,
          page: 1,
          perPage: 5,
        },
      });
      setServices(returnPayload.data);
    }

    fetchData();
  }, [value]);

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
          value={value}
          onBlur={setValue}
        />

      </InputWrapper>

      <ScrollCard>
        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#ff0000"
            photoURL="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
            name="João Vitor Pereira"
            occupation="Jogador"
          />
        </CardWrapper>
      </ScrollCard>

    </Container>
  );
}

export default withLayout(MyServices);
