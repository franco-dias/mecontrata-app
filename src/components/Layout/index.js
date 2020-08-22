import React from 'react';

import PageHeader from '../PageHeader';
import { Container, KeyboardAvoid } from './style';

const Layout = ({ children, ...props }) => (
  <Container>
    <PageHeader {...props} />
    <KeyboardAvoid>
      {children}
    </KeyboardAvoid>
  </Container>
);

export default Layout;
