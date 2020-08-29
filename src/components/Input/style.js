import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import GenericIcon from '../Icon';

const Container = styled.View`
  height: 48px;
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, .1);
  border-radius: 24px;
  border-width: 2px;
  border-color: transparent;
  padding: 0 16px;
  width: 100%;
  ${({ variant }) => variant === 'small' && css`
    border-radius: 18px;
    height: 36px;
    border-color: transparent;
    border-width: 1px;
    padding: 0 8px 0 16px;
  `}

  ${({ hasError }) => hasError && css`
    border-color: #FF0B0B;
  `}
  ${({ isFocused }) => isFocused && css`
    border-color: #6C6CE5;
  `}
`;

const Field = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: InterRegular;
  padding: 0;
  ${({ variant }) => variant === 'small' && css`
    font-size: 14px;
  `}
`;

const Icon = styled((props) => <GenericIcon {...props} />)`
  margin-left: 8px;
`;

const Error = styled.Text`
  color: #ff0000;
  font-size: 12px;
  font-family: InterSemiBold;
  margin-left: 12px;
`;

export {
  Container,
  Field,
  Icon,
  Error,
};
