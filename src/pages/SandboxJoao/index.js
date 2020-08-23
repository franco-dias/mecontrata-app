import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';
import api from '../../resources/api';
import CategoryCard from '../../components/CategoryCard';
import TextArea from '../../components/TextArea';
import Gallery from '../../components/Gallery';

function DashboardPage() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const returnPayload = await api.get('/category');
      setCategory(returnPayload.data);
    }

    fetchData();
  }, []);

  console.log(category);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
      {category.map((cat) => (
        <CategoryCard title={cat.description} color={cat.color} key={cat.id} />
      ))}
      <TextArea placeHolder="Descrição" />
      <Gallery photos={['https://avatars3.githubusercontent.com/u/33707685?s=60&v=4', 'https://avatars3.githubusercontent.com/u/33707685?s=60&v=4']} />
    </View>
  );
}

export default DashboardPage;
