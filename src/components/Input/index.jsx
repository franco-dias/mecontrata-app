import React, { useState, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Field,
  Icon,
  Error,
} from './style';
import IconButton from '../IconButton';

const Input = ({
  error,
  iconName,
  touched,
  onBlur,
  onIconPress,
  variant,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = useMemo(() => Boolean(error), [error]);
  const iconColor = useMemo(() => (isFocused ? '#6C6CE5' : hasError && touched ? '#FF0B0B' : '#666'), [isFocused, hasError, touched]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <>
      <Container
        isFocused={isFocused}
        hasError={hasError && touched}
        variant={variant}
      >
        <Field
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
          variant={variant}
        />
        <IconButton onPress={onIconPress}>
          <Icon
            lib="MaterialDesign"
            iconName={hasError && touched ? 'error' : iconName}
            size={24}
            color={iconColor}
          />
        </IconButton>
      </Container>
      {hasError && touched && (
        <Error>
          {error}
        </Error>
      )}
    </>
  );
};

Input.defaultProps = {
  value: '',
  onChangeText: () => {},
  error: '',
  touched: false,
  onIconPress: () => {},
  variant: 'normal',
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onIconPress: PropTypes.func,
  variant: PropTypes.string,
};

export default memo(Input);
