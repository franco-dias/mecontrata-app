import React from 'react';

import Typography from '../Typography';
import {
  Card, Square,
} from './style';

function CategoryCard({ title, color }) {
  return (

    <Card>
      <Square color={color} />
      <Typography variant="text">
        { title }
      </Typography>
    </Card>

  );
}

export default CategoryCard;
