import React from 'react';
import { Text } from './style';

function Typography({ variant, children }) {
  return (
    <Text variant={variant}>
      {children}
    </Text>
  );
}

export default Typography;
