import React from 'react';

import PageHeader from '../../components/PageHeader';
import Typography from '../../components/Typography';
import Icon from '../../components/Icon';
import ServiceCard from '../../components/ServiceCard';
import withLayout from '../../components/Layout/withLayout';

import {
  Container,
  PageContent,
  TitleWrapper,
  ServiceWrapper,
  CardWrapper,
} from './style';

const MyServices = ({ navigation }) => (
  <Container>
    <TitleWrapper>
      <Typography variant="title">
        Meus serviços
      </Typography>
      <Icon lib="MaterialDesign" iconName="add" color="#000" size={20} />
    </TitleWrapper>

    <PageContent>
      <ServiceWrapper>
        <CardWrapper>
          <ServiceCard
            color="#D9D9F9"
            photoURL="https://reactnative.dev/img/tiny_logo.png"
            name="John Doe"
            occupation="Eletricista - Uberlândia/MG"
            trash
          />
        </CardWrapper>

        <CardWrapper>
          <ServiceCard
            color="#D9D9F9"
            photoURL="https://reactnative.dev/img/tiny_logo.png"
            name="John Doe"
            occupation="Eletricista - Uberlândia/MG"
            trash
          />
        </CardWrapper>
      </ServiceWrapper>
    </PageContent>

  </Container>
);

export default withLayout(MyServices);
