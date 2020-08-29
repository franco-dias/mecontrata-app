import React from 'react';

import Image from '../Image';
import { Container, Message } from './style';

const EmptyState = ({ imageName, message }) => (
  <Container>
    <Image
      name={imageName}
    />
    <Message>
      {message}
    </Message>
  </Container>
);

export default EmptyState;
