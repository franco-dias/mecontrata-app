import { css } from 'styled-components';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  border-radius: 21px;
  background-color: ${({ link }) => (link ? 'transparent' : '#6C6CE5')};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  ${({ link }) => (link ? css`
    color: #333;
    font-size: 12px;
  ` : css`
    color: #ffffff;
    font-size: 15px;
    text-transform: uppercase;
  `)};
  font-family: InterSemiBold;
`;

export { ButtonContainer, ButtonText };
