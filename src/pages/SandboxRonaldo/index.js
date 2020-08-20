import React from 'react';
import { View } from 'react-native';

import SpotlightCard from '../../components/SpotlightCard';

const DashboardPage = () => (
  <View>
    <SpotlightCard

      name="Ronaldo Alves"
      occupation="Carpinteiro"
      local="Monte Carmelo, MG"
      likes="212"
      profilePhoto="https://reactnative.dev/img/tiny_logo.png"
      colorBalloon="#6C6CE5"
      colorTitle="#fff"
      colorIcon="#fff"
      colorCustomText="#fff"
    />
  </View>
);

export default DashboardPage;
