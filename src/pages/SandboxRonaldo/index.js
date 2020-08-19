import React from 'react';
import {
  View,
} from 'react-native';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import SpotlightCard from '../../components/SpotlightCard';

const DashboardPage = () => (
  <View>
    <Typography variant="title">
      Teste
    </Typography>

    <Typography variant="subtitle">
      Teste
    </Typography>

    <Typography variant="text">
      Teste
    </Typography>

    <Button label="Continuar" />

    <IconButton iconName="add" />
    <SpotlightCard
      name="Ronaldo Alves"
      occupation="Carpinteiro"
      local="Monte Carmelo, MG"
      likes="212"
    />
  </View>
);

export default DashboardPage;
