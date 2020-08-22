import React from 'react';

import { ButtonContainer, ButtonText } from './style';

function Button({ label, ...props }) {
  return (
    <ButtonContainer {...props}>
      <ButtonText>
        {label}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
