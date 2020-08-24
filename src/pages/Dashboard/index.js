import React, { useState, useEffect } from 'react';
import {
  View,
} from 'react-native';
import api from '../../resources/api';
import withLayout from '../../components/Layout/withLayout';
import Typography from '../../components/Typography';
import SpotlightCard from '../../components/SpotlightCard';
import CategoryCard from '../../components/CategoryCard';
import capitalizeWords from '../../utils/capitalizeWords';

import {
  ServicesWrapper,
  ScrollCard,
  ItemService,
  CategoryWrapper,
  Row,
  ScrollCategory,
  ItemCategory,
} from './style';

function DashboardPage({ navigation }) {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/category');
        setCategorys(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <Typography variant="title">
        Encontre serviços
      </Typography>

      <ServicesWrapper>
        <Typography variant="subtitle">
          Últimos
        </Typography>

        <ScrollCard horizontal>
          <ItemService>
            <SpotlightCard
              name="João Vitor Pereira"
              occupation="Jogador"
              local="Uberlândia"
              likes={30000}
              profilePhoto="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
              colorBalloon="#009933"
              colorTitle="#ffffff"
              colorCustomText="#ffffff"
              colorIcon="#ffffff"
            />
          </ItemService>

          <ItemService>
            <SpotlightCard
              name="João Vitor Pereira"
              occupation="Jogador"
              local="Uberlândia"
              likes={30000}
              profilePhoto="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
              colorBalloon="#009933"
              colorTitle="#ffffff"
              colorCustomText="#ffffff"
              colorIcon="#ffffff"
            />
          </ItemService>
          <ItemService>
            <SpotlightCard
              name="João Vitor Pereira"
              occupation="Jogador"
              local="Uberlândia"
              likes={30000}
              profilePhoto="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/42672653_1827036637393127_4729297221017665536_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=9eu6zmQXPg0AX-CYBUs&_nc_ht=scontent.fudi1-1.fna&oh=3eb1cb8950eb55e3bc5c20bf834b6cdb&oe=5F6625D3"
              colorBalloon="#009933"
              colorTitle="#ffffff"
              colorCustomText="#ffffff"
              colorIcon="#ffffff"
            />
          </ItemService>
        </ScrollCard>
      </ServicesWrapper>

      <CategoryWrapper>
        <Typography variant="subtitle">
          Categorias
        </Typography>

        <Row />

        <ScrollCategory>
          {categorys.map((category) => (
            <ItemCategory key={category.id}>
              <CategoryCard
                title={capitalizeWords(category.description)}
                color={category.color}
                key={category.id}
                onPress={() => navigation.navigate('CategoryServices', { id: category.id })}
              />
            </ItemCategory>
          ))}
        </ScrollCategory>

      </CategoryWrapper>
    </View>
  );
}

export default withLayout(DashboardPage);
