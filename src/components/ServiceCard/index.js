import React from 'react';

import {
  Card, 
  CategoryColor, 
  ProfilePhoto
} from './style';

import { StyleSheet, View, Text } from 'react-native';

function ServiceCard({ color, photoURL, name, occupation }) {
  return (
    <Card style={styles.shadow}>
      <CategoryColor color={ color } />
      
      <ProfilePhoto 
        source={{ uri: photoURL }}
      />

      <View>
        <Text style={styles.name}>
          { name }
        </Text>
        
        <Text style={styles.occupation}>
          { occupation }
        </Text>
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
  name: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
    color: "#666"
  },
  occupation: {
    fontSize: 11,
    fontFamily: "InterMedium",
    color: "#666"
  }
});

export default ServiceCard;