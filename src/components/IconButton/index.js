import React from 'react';

import { Container } from './style';

function IconButton({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

export default IconButton;
