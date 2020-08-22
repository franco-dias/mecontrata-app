import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const PageContent = styled.ScrollView`
  flex: 1;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`;

const ServiceWrapper = styled.View`
  padding-top: 16px;
`;

const CardWrapper = styled.View`
  padding-top: 16px;
`;

export {
  Container,
  PageContent,
  TitleWrapper,
  ServiceWrapper,
  CardWrapper,
};
