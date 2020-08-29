import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import GenericIcon from '../Icon';
import Typography from '../Typography';

const Container = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, .1);
  border-radius: 24px;
  border-width: 2px;
  padding: 0 16px;
  border-color: #cccccc;
  ${({ hasError }) => hasError && css`
    border-color: #FF0B0B;
  `}
  ${({ isFocused }) => isFocused && css`
    border-color: #6C6CE5;
  `}
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
  `}
`;

const Field = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
`;

const FieldText = styled.Text`
  width: 100%;
  font-size: 16px;
  font-family: InterRegular;
  margin-left: 4px;
`;

const Icon = styled((props) => <GenericIcon {...props} />)`
  margin-left: 8px;
`;

const Backdrop = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const OptionsContainer = styled.View`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-width: 1px;
  border-color: #eee;
  height: 80%;
  background: #fff;
  width: 100%;
  position: absolute;
  padding: 24px;
  bottom: 0;
  z-index: 2;
`;

const Option = styled.TouchableOpacity`
  border-bottom-width: 1px;
  padding: 12px 0;
  border-color: #ccc;
`;

const OptionText = styled.Text`
  font-family: InterSemiBold;
  color: #666;
  font-size: 14px;
  ${({ small }) => small && css`font-size: 12px;`}
`;

const Title = styled(Typography)`
`;

const Error = styled.Text`
  color: #ff0000;
  font-size: 12px;
  font-family: InterSemiBold;
  margin-left: 12px;
`;

const SearchContainer = styled.View`
  margin-top: 12px;
`;

export {
  Container,
  Field,
  FieldText,
  Icon,
  Option,
  OptionText,
  OptionsContainer,
  Title,
  Backdrop,
  Error,
  SearchContainer,
};
