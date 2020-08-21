import styled from 'styled-components/native';
import { css } from 'styled-components';

const textStyles = {
  big: css`
    font-size: 64px;
    font-family: LobsterRegular;
    color: ${({ color }) => color};
  `,
  small: css`
    font-size: 14px;
    font-familly: LobsterRegular;
    color: ${({ color }) => color};
  `,
};

const Text = styled.Text`
  ${({ variant }) => textStyles[variant]}
`;

export {
  Text,
};
