import React from 'react';

import Layout from '.';

const withLayout = (WrappedComponent) => (props) => (
  <Layout {...props}>
    <WrappedComponent {...props} />
  </Layout>
);

export default withLayout;
