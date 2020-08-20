import React from 'react';
import {
  View, Text,
} from 'react-native';

import ServiceCard from '../../components/ServiceCard';

const Sandbox = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
      <ServiceCard 
        color="#D9D9F9" 
        photoURL="https://reactnative.dev/img/tiny_logo.png" 
        name="John Doe" 
        occupation="Eletricista - Uberlândia/MG"
      />
    </View>
  );
};

export default Sandbox;