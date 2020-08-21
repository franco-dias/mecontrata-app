import React from 'react';

import { ButtonContainer, ButtonText } from './style';

function Button({ label }) {
  return (
    <ButtonContainer>
      <ButtonText>
        {label}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
