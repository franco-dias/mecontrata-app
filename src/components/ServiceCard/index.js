import React from 'react';

import {
  Card, 
  CategoryColor, 
  ProfilePhoto,
  TextProfile
} from './style';
import Icon from '../Icon';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

function ServiceCard({ color, photoURL, name, occupation, trash }) {
  return (
    <Card style={styles.shadow}>
      <CategoryColor color={ color } />
      
      <ProfilePhoto 
        source={{ uri: photoURL }}
      />

      <View style={styles.texts}>
        <TextProfile 
          size={11}
          family="InterMedium"
        >
          { name }
        </TextProfile>
        
        <TextProfile 
          size={11}
          family="InterMedium"
        >
          { occupation }
        </TextProfile>
      </View>

      <TouchableOpacity style={styles.icon}>
        { trash &&
          (<Icon
            lib="Feather"
            iconName="trash"
            size={20}
            color="#DADADA"
          />)
        }
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 1 
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  texts: {
    flexGrow: 1
  },
  icon: {
    padding: 15
  }
});

export default ServiceCard;