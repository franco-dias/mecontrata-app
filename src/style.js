import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AppView = styled.View`
  flex: 1;
  width: 100%;
`;

const LoadingView = styled.View`
  min-width: 100%;
  min-height: 100%;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export { SafeArea, AppView, LoadingView };
