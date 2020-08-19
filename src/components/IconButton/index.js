import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ButtonIcon } from './style';

function IconButton({ iconName }) {
  return (
    <ButtonIcon>
      <Icon name={iconName} size={24} />
    </ButtonIcon>
  );
}

export default IconButton;
