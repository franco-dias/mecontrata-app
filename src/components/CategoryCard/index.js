import React from 'react';

import { StyleSheet } from 'react-native';
import Typography from '../Typography';
import {
  Card,
  Square,
} from './style';

const styles = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  texts: {
    flexGrow: 1,
  },
  icon: {
    padding: 15,
  },
});

const CategoryCard = ({ title, color, ...props }) => (
  <Card style={styles.shadow} {...props}>
    <Square color={color} />
    <Typography variant="text" numberOfLines={1}>
      {title}
    </Typography>
  </Card>
);

export default CategoryCard;
