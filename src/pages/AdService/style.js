import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-bottom: 24px;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  margin-top: 12px;
`;

const Col = styled.View`
  flex-direction: column;
  flex: 1;
`;

const UserPhoto = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-right: 18px;
`;

const UsernameAndIcon = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.View`
  margin-top: 24px;
`;

export {
  Container,
  Row,
  Col,
  UserPhoto,
  UsernameAndIcon,
  ButtonContainer,
};
