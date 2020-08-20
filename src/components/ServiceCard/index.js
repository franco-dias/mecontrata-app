import React from 'react';

import {
  Card, 
  CategoryColor, 
  ProfilePhoto
} from './style';
import Icon from '../Icon';

import { StyleSheet, View, Text } from 'react-native';

function ServiceCard({ color, photoURL, name, occupation, trash }) {
  return (
    <Card style={styles.shadow}>
      <CategoryColor color={ color } />
      
      <ProfilePhoto 
        source={{ uri: photoURL }}
      />

      <View style={styles.texts}>
        <Text style={styles.name}>
          { name }
        </Text>
        
        <Text style={styles.occupation}>
          { occupation }
        </Text>
      </View>

      <View style={styles.icon}>
        { trash &&
          (<Icon
            lib="Feather"
            iconName="trash"
            size={20}
            color="#DADADA"
          />)
        }
      </View>
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
  name: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
    color: "#666"
  },
  occupation: {
    fontSize: 11,
    fontFamily: "InterMedium",
    color: "#666"
  },
  icon: {
    padding: 15
  }
});

export default ServiceCard;