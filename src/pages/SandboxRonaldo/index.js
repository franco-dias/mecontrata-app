import React from 'react';
import {
  View,
} from 'react-native';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

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
  </View>
);

export default DashboardPage;
