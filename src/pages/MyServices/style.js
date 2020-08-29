import styled, { css } from 'styled-components/native';

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
  margin-top: 24px;
`;

const ServiceWrapper = styled.View`
  padding-top: 16px;
`;

const CardWrapper = styled.View`
  padding-top: 16px;
`;

const CreateAdLinkText = styled.Text`
  color: #6C6CE5;
  font-family: InterSemiBold;
  font-size: 16px;
`;

const CreateAdText = styled.Text`
  font-size: 16px;
  color: #666666;
  ${({ marginLeft }) => marginLeft && css`
    margin-right: 4px;
  `}
  ${({ marginRight }) => marginRight && css`
    margin-right: 4px;
  `}
  ${({ marginHorizontal }) => marginHorizontal && css`
    margin: 0 4px;
  `}
`;

export {
  Container,
  PageContent,
  TitleWrapper,
  ServiceWrapper,
  CardWrapper,
  CreateAdText,
  CreateAdLinkText,
};
