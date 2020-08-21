import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Field, Icon } from './style';

const Input = ({
  error,
  iconName,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = useMemo(() => Boolean(error), [error]);
  const iconColor = useMemo(() => (isFocused ? '#6C6CE5' : hasError ? '#FF0B0B' : '#666'), [isFocused, hasError]);

  return (
    <Container
      isFocused={isFocused}
      hasError={hasError}
    >
      <Field
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <Icon
        lib="MaterialDesign"
        iconName={hasError ? 'error' : iconName}
        size={24}
        color={iconColor}
      />
    </Container>
  );
};

Input.defaultProps = {
  value: '',
  onChangeText: () => {},
  error: '',
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
