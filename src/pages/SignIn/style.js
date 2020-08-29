import styled, { css } from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const LogoWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const FormWrapper = styled.View`
  margin: 24px;
`;

const InputWrapper = styled.View`
  width: 100%;
  padding-top: 16px;
`;

const Link = styled.TouchableOpacity`
  margin-top: 16px;
  width: 100%;
  align-items: center;
`;

const LinkText = styled.Text`
  color: #6C6CE5;
  font-family: InterSemiBold;
  font-size: 16px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #666666;
  ${({ marginRight }) => marginRight && css`
    margin-right: 4px;
  `}
  ${({ marginHorizontal }) => marginHorizontal && css`
    margin: 0 4px;
  `}
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export {
  Container,
  LogoWrapper,
  FormWrapper,
  InputWrapper,
  Link,
  LinkText,
  Text,
  Row,
};
