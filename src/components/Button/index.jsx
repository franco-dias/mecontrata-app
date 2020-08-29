import React, { memo } from 'react';

import { ButtonContainer, ButtonText } from './style';

function Button({ label, link, ...props }) {
  return (
    <ButtonContainer {...props} link={link}>
      <ButtonText link={link}>
        {label}
      </ButtonText>
    </ButtonContainer>
  );
}

export default memo(Button);
