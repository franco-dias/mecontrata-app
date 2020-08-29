import React, { memo } from 'react';
import { Text } from './style';

function Typography({ variant, children, color }) {
  return (
    <Text variant={variant} color={color}>
      {children}
    </Text>
  );
}

export default memo(Typography);
