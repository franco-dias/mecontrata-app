import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const PageContent = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

const UploadWrapper = styled.View`
  align-items: center;
  padding-bottom: 8px;
  margin-top: 32px;
`;

const InputWrapper = styled.View`
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
  UploadWrapper,
  Container,
  InputWrapper,
  Link,
  LinkText,
  PageContent,
};
