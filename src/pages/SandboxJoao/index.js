import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import TextArea from '../../components/TextArea';

const DashboardPage = () => (
  <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
    <CategoryCard title="Administração, negócios e serviçosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" color="#cc0066" />
    <TextArea placeHolder="Descrição" />
  </View>
);

export default DashboardPage;
