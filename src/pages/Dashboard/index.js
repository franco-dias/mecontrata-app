import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import withLayout from '../../components/Layout/withLayout';

const DashboardPage = () => (
  <View>
    <Text> Teste de texto </Text>
  </View>
);

export default withLayout(DashboardPage);
