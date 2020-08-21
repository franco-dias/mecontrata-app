import styled from 'styled-components/native';

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
  margin-bottom: 32px;
`;

const LinkText = styled.Text`
  color: #666666;
  font-family: InterSemiBold;
  font-size: 16px;
`;

export {
  Container,
  LogoWrapper,
  FormWrapper,
  InputWrapper,
  Link,
  LinkText,
};
