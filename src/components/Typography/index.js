import React from 'react';
import { Text } from './style';

function Typography({ variant, children, color }) {
  return (
    <Text variant={variant} color={color} numberOfLines={1}>
      {children}
    </Text>
  );
}

export default Typography;
