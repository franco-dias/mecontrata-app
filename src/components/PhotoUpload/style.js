import { css } from 'styled-components';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `}
  border-color: #ccc;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const PreviewImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  PreviewImage,
};
