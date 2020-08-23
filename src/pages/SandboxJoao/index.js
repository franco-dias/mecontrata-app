import React from 'react';
import {
  View,
} from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import TextArea from '../../components/TextArea';
import Gallery from '../../components/Gallery';

const DashboardPage = () => (
  <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
    <CategoryCard title="Administração, negócios e serviçosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" color="#cc0066" />
    <TextArea placeHolder="Descrição" />
    <Gallery photos={['https://avatars3.githubusercontent.com/u/33707685?s=60&v=4', 'https://avatars3.githubusercontent.com/u/33707685?s=60&v=4']} />
  </View>
);

export default DashboardPage;
