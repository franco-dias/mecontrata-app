import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './style';

function Logo({ variant, color }) {
  return (
    <Text variant={variant} color={color}>
      Me contrata!
    </Text>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

Logo.defaultProps = {
  variant: 'big',
  color: '#000',
};

export default Logo;
