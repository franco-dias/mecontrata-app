import React from 'react';
import {
  View,
} from 'react-native';
import CategoryCard from '../../components/CategoryCard';

const DashboardPage = () => (
  <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
    <CategoryCard title="Administração, negócios e serviços" color="#cc0066" />
  </View>
);

export default DashboardPage;
